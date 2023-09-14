import { forbidden, HttpResponse, ok } from '@/application/helpers';
import { Middleware } from '@/application/middlewares';
import { RequiredString } from '@/application/validation';
import { NotFoundError, UnauthorizedError } from '../errors';
import { Decrypt, KeyTokenRepository } from '@/domain/contracts';
import { KeyToken } from '@/domain/entities';

export namespace AuthenticationMiddleware {
  export type Request = {
    authorization: string;
    clientId: string;
    refreshToken: string;
  };
  export type Model =
    | Error
    | { keyStore: KeyToken; user: any; refreshToken?: string };
}
export class AuthenticationMiddleware implements Middleware {
  constructor(
    private readonly keyTokenRepository: KeyTokenRepository,
    private readonly verifyToken: Decrypt
  ) {}

  async handle({
    authorization,
    clientId,
    refreshToken
  }: AuthenticationMiddleware.Request): Promise<
    HttpResponse<AuthenticationMiddleware.Model>
  > {
    if (!this.validate({ authorization, clientId, refreshToken }))
      return forbidden();
    try {
      if (!clientId) throw new UnauthorizedError('Invalid Request');
      const keyStore = await this.keyTokenRepository.findByUserId(clientId);
      if (!keyStore) throw new NotFoundError('Not Found Key Store');
      if (refreshToken) {
        const decodeUser = await this.verifyToken.decrypt(
          refreshToken,
          keyStore.privateKey
        );
        if (clientId !== decodeUser.userId)
          throw new UnauthorizedError('Invalid User');
        return ok({
          keyStore,
          user: decodeUser,
          refreshToken
        });
      }
      const accessToken = authorization;
      const decodeUser = await this.verifyToken.decrypt(
        accessToken,
        keyStore.publicKey
      );
      if (clientId !== decodeUser.userId)
        throw new UnauthorizedError('Invalid User');
      return ok({
        keyStore,
        user: decodeUser
      });
    } catch {
      return forbidden();
    }
  }
  private validate({
    authorization,
    clientId,
    refreshToken
  }: AuthenticationMiddleware.Request): boolean {
    const error = new RequiredString(authorization, 'authorization').validate();
    const error1 = new RequiredString(clientId, 'x-client-id').validate();
    const error2 = new RequiredString(refreshToken, 'refresh-token').validate();
    return error === undefined || error1 === undefined || error2 === undefined;
  }
}

import { HttpResponse, ok } from '@/application/helpers';
import { Middleware } from '@/application/middlewares';
import { ApiKey } from '@/domain/entities';
import { ForbiddenError } from '@/application/errors';

export namespace PermissionMiddleware {
  export type Request = {
    objKey: ApiKey;
  };
  export type Model = Error | boolean;
}
export class PermissionMiddleware implements Middleware {
  constructor(private readonly permission?: string) {}

  async handle({
    objKey
  }: PermissionMiddleware.Request): Promise<
    HttpResponse<PermissionMiddleware.Model>
  > {
    if (this.validate(objKey)) throw new ForbiddenError();
    if (!objKey.permissions) throw new ForbiddenError('Permissions denied');
    const validPermission = objKey.permissions.includes(
      this.permission ?? '0000'
    );
    if (!validPermission) throw new ForbiddenError('Permissions denied');
    return ok(true);
  }
  private validate(objKey: ApiKey): boolean {
    return objKey === undefined;
  }
}

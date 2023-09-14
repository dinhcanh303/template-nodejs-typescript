import { forbidden, HttpResponse, ok } from '@/application/helpers';
import { Middleware } from '@/application/middlewares';
import { RequiredString } from '@/application/validation';
import { ApiKeyRepository } from '@/domain/contracts';
import { ApiKey } from '@/domain/entities';

export namespace ApiKeyMiddleware {
  export type Request = {
    apiKey: string;
  };
  export type Model = Error | { objKey: ApiKey };
}
export class ApiKeyMiddleware implements Middleware {
  constructor(private readonly apiKeyRepository: ApiKeyRepository) {}

  async handle({
    apiKey
  }: ApiKeyMiddleware.Request): Promise<HttpResponse<ApiKeyMiddleware.Model>> {
    if (!this.validate({ apiKey })) return forbidden();
    try {
      if (!apiKey) return forbidden();
      const objKey = await this.apiKeyRepository.findById(apiKey);
      if (!objKey) return forbidden();
      return ok({
        objKey
      });
    } catch {
      return forbidden();
    }
  }
  private validate({ apiKey }: ApiKeyMiddleware.Request): boolean {
    const error = new RequiredString(apiKey, 'x-api-key').validate();
    return error === undefined;
  }
}

import { forbidden, HttpResponse, ok } from '@/application/helpers';
import { Middleware } from '@/application/middlewares';
import { ApiKey } from '@/domain/entities';

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
    if (!this.validate({ objKey })) return forbidden();
    try {
      if (!objKey.permissions) return forbidden('Permissions denied');
      const validPermission = objKey.permissions.includes(
        this.permission ?? ''
      );
      if (!validPermission) return forbidden('Permission denied');
      return ok(true);
    } catch {
      return forbidden();
    }
  }
  private validate({ objKey }: PermissionMiddleware.Request): boolean {
    return objKey === undefined;
  }
}

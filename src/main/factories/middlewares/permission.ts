import { Middleware, PermissionMiddleware } from '@/application/middlewares';

export const makePermissionMiddleware = (): Middleware => {
  return new PermissionMiddleware();
};

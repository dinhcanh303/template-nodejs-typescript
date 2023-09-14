import {
  AuthenticationMiddleware,
  Middleware
} from '@/application/middlewares';
import { JwtAdapter } from '@/infra/cryptography/jwt.adapter';
import { KeyTokenTypeOrmRepository } from '@/infra/db/typeorm';

export const makeAuthMiddleware = (): Middleware => {
  const keyTokenRepo = new KeyTokenTypeOrmRepository();
  const verifyToken = new JwtAdapter();
  return new AuthenticationMiddleware(keyTokenRepo, verifyToken);
};

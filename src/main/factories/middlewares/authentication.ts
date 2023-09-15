import {
  AuthenticationMiddleware,
  Middleware
} from '@/application/middlewares';
import { JwtAdapter } from '@/infra/cryptography/jwt.adapter';
import { KeyTokenMongoDbRepository } from '@/infra/db/mongodb/repos';

export const makeAuthMiddleware = (): Middleware => {
  const keyTokenRepo = new KeyTokenMongoDbRepository();
  const verifyToken = new JwtAdapter();
  return new AuthenticationMiddleware(keyTokenRepo, verifyToken);
};

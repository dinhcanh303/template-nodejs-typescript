import { AuthService } from '@/application/services';
import { AuthenticationUseCase } from '@/domain/use-cases';
import { BcryptAdapter } from '@/infra/cryptography/bcrypt.adapter';
import { CryptoAdapter } from '@/infra/cryptography/crypto.adapter';
import { JwtAdapter } from '@/infra/cryptography/jwt.adapter';
import {
  KeyTokenMongoDbRepository,
  ShopMongoDbRepository
} from '@/infra/db/mongodb/repos';

export const makeAuth = (): AuthenticationUseCase => {
  const crypto = new CryptoAdapter();
  const verifyToken = new JwtAdapter();
  const hashPassword = new BcryptAdapter();
  const shopRepos = new ShopMongoDbRepository();
  const keyTokenRepos = new KeyTokenMongoDbRepository();
  return new AuthService(
    shopRepos,
    hashPassword,
    crypto,
    keyTokenRepos,
    verifyToken,
    verifyToken,
    hashPassword
  );
};

import { AuthService } from '@/application/services';
import { AuthenticationUseCase } from '@/domain/use-cases';
import { CryptoAdapter } from '@/infra/cryptography/crypto.adapter';
import { JwtAdapter } from '@/infra/cryptography/jwt.adapter';
import { ApiKeyMongoDbRepository } from '@/infra/db/mongodb/repos';
import { ApiKeyTypeOrmRepository } from '@/infra/db/typeorm/repos';

export const makeLogin = (): AuthenticationUseCase => {
  const crypto = new CryptoAdapter();
  const verifyToken = new JwtAdapter();
  const apiKey = new ApiKeyMongoDbRepository();
  const shopRepos = new ShopMongoDbRepository();
  return new AuthService(crypto, apiKey);
};

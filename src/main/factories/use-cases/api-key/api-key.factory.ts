import { ApiKeyService } from '@/application/services';
import { ApiKeyUseCase } from '@/domain/use-cases';
import { CryptoAdapter } from '@/infra/cryptography/crypto.adapter';
import { ApiKeyMongoDbRepository } from '@/infra/db/mongodb/repos';

export const makeDbCreateApiKey = (): ApiKeyUseCase => {
  const crypto = new CryptoAdapter();
  const apiKey = new ApiKeyMongoDbRepository();
  return new ApiKeyService(crypto, apiKey);
};

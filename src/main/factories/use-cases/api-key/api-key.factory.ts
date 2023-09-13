import { ApiKeyService } from '@/application/services';
import { CryptoAdapter } from '@/infra/cryptography/crypto.adapter';
import { ApiKeyTypeOrmRepository } from '@/infra/db/typeorm/repos/api-key.repository';

export const makeDbCreateApiKey = (): ApiKeyService => {
  const crypto = new CryptoAdapter();
  const apiKey = new ApiKeyTypeOrmRepository();
  return new ApiKeyService(crypto, apiKey);
};

import { IApiKey } from '@/domain/contracts';
import { ApiKeyUseCase } from '@/domain/use-cases/api-key';
import { CryptoAdapter } from '@/infra/cryptography/crypto.adapter';
import { ApiKeyTypeOrmRepository } from '@/infra/db/typeorm/repos/api-key.repository';

export const makeDbApiKey = (): IApiKey => {
  const crypto = new CryptoAdapter();
  const apiKey = new ApiKeyTypeOrmRepository();
  return new ApiKeyUseCase(crypto, apiKey);
};

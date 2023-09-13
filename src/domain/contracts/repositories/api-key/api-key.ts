import { ApiKey } from '@/domain/entities';

export interface ApiKeyRepository {
  findById: (key: string) => Promise<ApiKeyRepository.Result>;
  create: (keyHash: string) => Promise<ApiKeyRepository.Result>;
}
export namespace ApiKeyRepository {
  export type Result = ApiKey;
}

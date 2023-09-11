import { ApiKey } from '@/domain/entities';

export interface ApiKeyUseCase {
  findById: (key: string) => Promise<ApiKeyUseCase.Result>;
  create: (keyHash: string) => Promise<ApiKeyUseCase.Result>;
}
export namespace ApiKeyUseCase {
  export type Result = ApiKey;
}
export interface ApiKeyRepository {
  findById: (key: string) => Promise<ApiKeyRepository.Result>;
  create: (keyHash: string) => Promise<ApiKeyRepository.Result>;
}
export namespace ApiKeyRepository {
  export type Result = ApiKey;
}

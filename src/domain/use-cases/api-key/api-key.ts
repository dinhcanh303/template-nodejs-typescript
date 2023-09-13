import { ApiKey } from '@/domain/entities';

export interface ApiKeyUseCase {
  findById: (key: string) => Promise<ApiKeyUseCase.Result>;
  create: () => Promise<ApiKeyUseCase.Result>;
}
export namespace ApiKeyUseCase {
  export type Result = ApiKey;
}

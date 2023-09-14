import { ApiKey } from '@/domain/entities';

export interface ApiKeyUseCase {
  create: () => Promise<ApiKeyUseCase.Result>;
}
export namespace ApiKeyUseCase {
  export type Result = ApiKey;
}

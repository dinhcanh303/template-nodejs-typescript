import { ApiKeyModel } from '../../entities';

export interface IApiKey {
  findById: (key: string) => Promise<ApiKeyModel>;
  createApiKey: () => Promise<ApiKeyModel>;
}
export interface IApiKeyRepository {
  create: (input: ApiKeyRepository.Params) => Promise<ApiKeyModel>;
  findById: (key: string) => Promise<ApiKeyModel>;
}
export namespace ApiKeyRepository {
  export type Params = Omit<ApiKeyModel, 'id'>;
}

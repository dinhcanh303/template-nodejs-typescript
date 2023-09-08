import { Crypto } from '../contracts';
import { IApiKey, IApiKeyRepository } from '../contracts/db';
import { ApiKeyModel } from '../entities';

export class ApiKeyUseCase implements IApiKey {
  constructor(
    private readonly crypto: Crypto,
    private readonly repository: IApiKeyRepository
  ) {}
  async findById(key: string): Promise<ApiKeyModel> {
    return await this.repository.findById(key);
  }
  async createApiKey(): Promise<ApiKeyModel> {
    const keyHash = await this.crypto.create();
    return await this.repository.create({
      key: keyHash,
      permission: ['0001']
    });
  }
}

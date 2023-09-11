import { Crypto } from '@/domain/use-cases';
import { ApiKeyRepository, ApiKeyUseCase } from '../use-cases/api-key';

export class ApiKeyService implements ApiKeyUseCase {
  constructor(
    private readonly crypto: Crypto,
    private readonly apiKeyRepository: ApiKeyRepository
  ) {}
  async findById(key: string): Promise<ApiKeyRepository.Result> {
    return await this.apiKeyRepository.findById(key);
  }
  async create(): Promise<ApiKeyRepository.Result> {
    const keyHash = await this.crypto.create();
    return await this.apiKeyRepository.create(keyHash);
  }
}

import { ApiKeyUseCase } from '@/domain/use-cases';
import { ApiKeyRepository, Crypto } from '@/domain/contracts';

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
    console.log(keyHash);
    return await this.apiKeyRepository.create(keyHash);
  }
}

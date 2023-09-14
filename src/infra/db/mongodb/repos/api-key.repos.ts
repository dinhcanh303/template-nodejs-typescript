import { ApiKeyRepository } from '@/domain/contracts';
import { ApiKeyModel } from '../entities';

export class ApiKeyMongoDbRepository implements ApiKeyRepository {
  async create(keyHash: string): Promise<ApiKeyRepository.Result | any> {
    const apiKey = await ApiKeyModel.create({
      key: keyHash,
      permissions: ['0000']
    });
    return apiKey;
  }
  async findById(key: string): Promise<ApiKeyRepository.Result | any> {
    return await ApiKeyModel.findOne({ key, status: true }).lean();
  }
}

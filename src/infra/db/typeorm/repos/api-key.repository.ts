import { ApiKeyRepository } from '@/domain/use-cases';
import { TypeormConnection } from '../connection';
import { DataSource } from 'typeorm';
import { ApiKey } from '../entities/api-key';

export class ApiKeyTypeOrmRepository implements ApiKeyRepository {
  async create(keyHash: string): Promise<ApiKeyRepository.Result | any> {
    const dataSource = TypeormConnection.getInstance().connect();
    console.log(dataSource);
    if (dataSource instanceof DataSource) {
      return dataSource.getRepository(ApiKey).create({
        key: keyHash,
        permissions: ['0001']
      });
    }
    return null;
  }
  async findById(key: string): Promise<ApiKeyRepository.Result | any> {
    const dataSource = TypeormConnection.getInstance().connect();
    if (dataSource instanceof DataSource) {
      return dataSource.getRepository(ApiKey).findOneBy({
        key
      });
    }
    return null;
  }
}

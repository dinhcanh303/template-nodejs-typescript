import { IApiKeyRepository, ApiKeyRepository } from '@/domain/contracts';
import { ApiKeyModel } from '@/domain/entities';
import { TypeormConnection } from '../connection';
import { DataSource } from 'typeorm';
import { ApiKey } from '../entities/api-key';

export class ApiKeyTypeOrmRepository implements IApiKeyRepository {
  async create(input: ApiKeyRepository.Params): Promise<ApiKeyModel | any> {
    const dataSource = TypeormConnection.getInstance().connect();
    if (dataSource instanceof DataSource) {
      console.log(dataSource.getRepository(ApiKey).create(input));
      return dataSource.getRepository(ApiKey).create(input);
    }
    return null;
  }
  async findById(key: string): Promise<ApiKeyModel | any> {
    const dataSource = TypeormConnection.getInstance().connect();
    if (dataSource instanceof DataSource) {
      return dataSource.getRepository(ApiKey).findOneBy({
        key
      });
    }
    return null;
  }
}

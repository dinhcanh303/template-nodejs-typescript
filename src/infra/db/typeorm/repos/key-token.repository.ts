import { KeyTokenRepository } from '@/domain/contracts';
import { TypeormConnection } from '../connection';
import { DataSource } from 'typeorm';
import { KeyToken } from '../entities/key-token';

export class KeyTokenTypeOrmRepository implements KeyTokenRepository {
  async createKeyToken(
    input: KeyTokenRepository.Params
  ): Promise<KeyTokenRepository.Result | any> {
    const dataSource = TypeormConnection.getInstance().connect();
    console.log(dataSource);
    if (dataSource instanceof DataSource) {
      return dataSource.getRepository(KeyToken).create({
        publicKey: input.publicKey,
        privateKey: input.privateKey
      });
    }
    return null;
  }
  async findByUserId(
    userId: string
  ): Promise<KeyTokenRepository.ResultFindByUserId | any> {
    const dataSource = TypeormConnection.getInstance().connect();
    console.log(dataSource);
    if (dataSource instanceof DataSource) {
      return dataSource.getRepository(KeyToken).findOneBy({
        userId
      });
    }
    return null;
  }
  async removeKeyById(id?: string): Promise<any> {
    const dataSource = TypeormConnection.getInstance().connect();
    console.log(dataSource);
    if (!id) return null;
    if (dataSource instanceof DataSource) {
      return await dataSource.getRepository(KeyToken).delete(id);
    }
    return null;
  }
  async findByRefreshToken(
    refreshToken: string
  ): Promise<KeyTokenRepository.ResultFindByRefreshToken | any> {
    return true;
  }
  async findByRefreshTokenUsed(
    refreshToken: string
  ): Promise<KeyTokenRepository.ResultFindByRefreshTokenUsed | any> {}
  async deletedKeyById(id: string): Promise<any> {}
}

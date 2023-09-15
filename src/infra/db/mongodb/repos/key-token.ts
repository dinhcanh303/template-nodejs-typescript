import { KeyTokenRepository } from '@/domain/contracts';
import { KeyTokenModel } from '../entities';
import { KeyToken } from '@/domain/entities';

export class KeyTokenMongoDbRepository implements KeyTokenRepository {
  async createKeyToken(
    input: KeyTokenRepository.Params
  ): Promise<KeyTokenRepository.Result | any> {
    try {
      const { userId, publicKey, privateKey, refreshToken } = input;
      const filter = { user: userId },
        update = { publicKey, privateKey, refreshTokensUsed: [], refreshToken },
        options = { upsert: true, new: true };
      const tokens = await KeyTokenModel.findOneAndUpdate(
        filter,
        update,
        options
      );
      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return error;
    }
  }
  async findByUserId(userId: string): Promise<KeyToken | any> {
    return await KeyTokenModel.findOne({ user: userId });
  }
  async removeKeyById(id?: string | undefined): Promise<any> {
    if (!id) return null;
    return await KeyTokenModel.deleteOne({ _id: id });
  }
  async findByRefreshToken(refreshToken: string): Promise<KeyToken | any> {
    return await KeyTokenModel.findOne({ refreshToken });
  }
  async findByRefreshTokensUsed(refreshToken: string): Promise<KeyToken | any> {
    return await KeyTokenModel.findOne({
      refreshTokensUsed: refreshToken
    }).lean();
  }
  async deletedKeyById(id: string): Promise<any> {
    return await KeyTokenModel.deleteOne({
      user: id
    });
  }
}

import { ShopRepository } from '@/domain/contracts';
import { ShopModel } from '../entities';

export class ShopMongoDbRepository implements ShopRepository {
  // findById: (id: string) => Promise<ShopRepository.Result>;
  // findByEmail: (email: string) => Promise<ShopRepository.Result>;
  // delete: (email: string) => Promise<boolean>;
  // create: (input: ShopRepository.Params) => Promise<ShopRepository.Result>;
  async create(
    input: ShopRepository.Params
  ): Promise<ShopRepository.Result | any> {
    const apiKey = await ShopModel.create(input);
    return apiKey;
  }
  async findById(id: string): Promise<ShopRepository.Result | any> {
    return await ShopModel.findOne({ _id: id }).lean();
  }
  async findByEmail(email: string): Promise<ShopRepository.Result | any> {
    return await ShopModel.findOne({ email }).lean();
  }
  async delete(email: string): Promise<ShopRepository.Result | any> {
    return await ShopModel.deleteOne({ email }).lean();
  }
}

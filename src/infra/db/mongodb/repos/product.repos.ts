import { ClothingRepository, ProductRepository } from '@/domain/contracts';
import { ClothingModel, ProductModel } from '../entities';

export class ProductMongoDbRepository implements ProductRepository {
  // findById: (id: string) => Promise<ProductRepository.Result>;
  // findByEmail: (email: string) => Promise<ProductRepository.Result>;
  // delete: (email: string) => Promise<boolean>;
  // create: (input: ProductRepository.Params) => Promise<ProductRepository.Result>;
  async create(
    input: ProductRepository.Params
  ): Promise<ProductRepository.Result | any> {
    const apiKey = await ProductModel.create(input);
    return apiKey;
  }
  async findById(id: string): Promise<ProductRepository.Result | any> {
    return await ProductModel.findOne({ _id: id }).lean();
  }
  async findByEmail(email: string): Promise<ProductRepository.Result | any> {
    return await ProductModel.findOne({ email }).lean();
  }
  async delete(email: string): Promise<ProductRepository.Result | any> {
    return await ProductModel.deleteOne({ email }).lean();
  }
}
export class ClothingMongoDbRepository implements ClothingRepository {
  async create(
    input: ClothingRepository.Params
  ): Promise<ClothingRepository.Result | any> {
    const newClothing = await ClothingModel.create(input);
    return newClothing;
  }
}

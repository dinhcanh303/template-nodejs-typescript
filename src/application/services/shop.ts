import { ShopRepository, ShopUseCase } from '../use-cases/shop';

export class ShopService implements ShopUseCase {
  constructor(private readonly shopRepository: ShopRepository) {}
  async findById(id: string): Promise<ShopRepository.Result> {
    return await this.shopRepository.findById(id);
  }
  async create(input: ShopRepository.Params): Promise<ShopRepository.Result> {
    return await this.shopRepository.create(input);
  }
  async delete(id: string): Promise<boolean> {
    return await this.shopRepository.delete(id);
  }
  async findByEmail(email: string): Promise<ShopRepository.Result> {
    return await this.shopRepository.findByEmail(email);
  }
}

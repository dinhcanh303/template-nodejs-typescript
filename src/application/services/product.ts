import { ProductRepository } from '@/domain/contracts';
import { Product } from '@/domain/entities';
import { ProductUseCase } from '@/domain/use-cases';

export class ProductService implements ProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}
  async create(input: ProductUseCase.Params): Promise<ProductUseCase.Result> {
    return this.productRepository.create(input);
  }
  // async update(input: ProductUseCase.Params): Promise<ProductUseCase.Params> {
  //   return this.productRepository.update(input);
  // }
  // async findById(id: string): Promise<ProductUseCase.Result> {
  //   return this.productRepository.findById(id);
  // }
}

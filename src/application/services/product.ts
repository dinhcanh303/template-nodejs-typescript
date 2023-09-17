import {
  ClothingRepository,
  ElectronicRepository,
  FurnitureRepository,
  ProductRepository
} from '@/domain/contracts';
import { Product } from '@/domain/entities';
import { ProductUseCase } from '@/domain/use-cases';
import { ProductFactory } from './factories';

export class ProductService implements ProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    public readonly clothingRepository: ClothingRepository,
    public readonly electronicRepository: ElectronicRepository,
    public readonly furnitureRepository: FurnitureRepository
  ) {}
  async create(input: ProductUseCase.Params): Promise<ProductUseCase.Result> {
    console.log(input);
    return ProductFactory.createProduct(
      input.productType,
      {
        ...input
      },
      {
        productRepository: this.productRepository,
        clothingRepository: this.clothingRepository,
        electronicRepository: this.electronicRepository,
        furnitureRepository: this.furnitureRepository
      }
    );
  }
  // async update(input: ProductUseCase.Params): Promise<ProductUseCase.Params> {
  //   return this.productRepository.update(input);
  // }
  // async findById(id: string): Promise<ProductUseCase.Result> {
  //   return this.productRepository.findById(id);
  // }
}

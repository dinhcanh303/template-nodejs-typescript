import { Product } from '@/domain/entities';

export interface ProductRepository {
  findById: (id: string) => Promise<ProductRepository.Result>;
  delete: (id: string) => Promise<boolean>;
  update: (
    input: ProductRepository.Params
  ) => Promise<ProductRepository.Result>;
  create: (
    input: ProductRepository.Params
  ) => Promise<ProductRepository.Result>;
}
export namespace ProductRepository {
  export type Params = Omit<Product, 'id'>;
  export type Result = Product;
}

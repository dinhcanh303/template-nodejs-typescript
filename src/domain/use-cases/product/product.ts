import { Product } from '@/domain/entities';

export interface ProductUseCase {
  findById: (id: string) => Promise<ProductUseCase.Result>;
  published: () => Promise<ProductUseCase.Result>;
  unPublished: () => Promise<ProductUseCase.Result>;
  search: () => Promise<ProductUseCase.Result[]>;
  findAll: () => Promise<ProductUseCase.Result[]>;
  findAllPublished: () => Promise<ProductUseCase.Result[]>;
  findAllDraft: () => Promise<ProductUseCase.Result[]>;
  delete: (id: string) => Promise<boolean>;
  update: (input: ProductUseCase.Params) => Promise<ProductUseCase.Result>;
  create: (input: ProductUseCase.Params) => Promise<ProductUseCase.Result>;
}
export namespace ProductUseCase {
  export type Params = Omit<Product, 'id'>;
  export type Result = Product;
}

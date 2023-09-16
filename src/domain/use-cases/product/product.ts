import { Clothing, Electronic, Furniture, Product } from '@/domain/entities';

export interface ProductUseCase {
  create: (input: ProductUseCase.Params) => Promise<ProductUseCase.Result>;
  // findById: (id: string) => Promise<ProductUseCase.Result>;
  // publish: () => Promise<ProductUseCase.Result>;
  // unPublish: () => Promise<ProductUseCase.Result>;
  // search: () => Promise<ProductUseCase.Result[]>;
  // findAll: () => Promise<ProductUseCase.Result[]>;
  // findAllPublish: () => Promise<ProductUseCase.Result[]>;
  // findAllDraft: () => Promise<ProductUseCase.Result[]>;
  // delete: (id: string) => Promise<boolean>;
  // update: (input: ProductUseCase.Params) => Promise<ProductUseCase.Result>;
}
export namespace ProductUseCase {
  export type Params = Omit<Product, 'id'>;
  export type Result = Product;
}
export interface ElectronicUseCase {
  create: (
    input: ElectronicUseCase.Params
  ) => Promise<ElectronicUseCase.Result>;
}
export namespace ElectronicUseCase {
  export type Params = Omit<Electronic, 'id'>;
  export type Result = Electronic;
}

export interface ClothingUseCase {
  create: (input: ClothingUseCase.Params) => Promise<ClothingUseCase.Result>;
}
export namespace ClothingUseCase {
  export type Params = Omit<Clothing, 'id'>;
  export type Result = Clothing;
}

export interface FurnitureUseCase {
  create: (input: FurnitureUseCase.Params) => Promise<FurnitureUseCase.Result>;
}
export namespace FurnitureUseCase {
  export type Params = Omit<Furniture, 'id'>;
  export type Result = Furniture;
}

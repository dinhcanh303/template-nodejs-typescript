import { Clothing, Electronic, Furniture, Product } from '@/domain/entities';

export interface ProductRepository {
  create: (
    input: ProductRepository.Params
  ) => Promise<ProductRepository.Result>;
  // findById: (id: string) => Promise<ProductRepository.Result>;
  // delete: (id: string) => Promise<boolean>;
  // update: (
  //   input: ProductRepository.Params
  // ) => Promise<ProductRepository.Result>;
}
export namespace ProductRepository {
  export type Params = Omit<Product, 'id'>;
  export type Result = Product;
}
export interface ElectronicRepository {
  create: (
    input: ElectronicRepository.Params
  ) => Promise<ElectronicRepository.Result>;
}
export namespace ElectronicRepository {
  export type Params = Omit<Electronic, 'id'>;
  export type Result = Electronic;
}
export interface ClothingRepository {
  create: (
    input: ClothingRepository.Params
  ) => Promise<ClothingRepository.Result>;
}
export namespace ClothingRepository {
  export type Params = Omit<Clothing, 'id'>;
  export type Result = Clothing;
}
export interface FurnitureRepository {
  create: (
    input: FurnitureRepository.Params
  ) => Promise<FurnitureRepository.Result>;
}
export namespace FurnitureRepository {
  export type Params = Omit<Furniture, 'id'>;
  export type Result = Furniture;
}

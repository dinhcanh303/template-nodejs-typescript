import { Shop } from '@/domain/entities';

export interface ShopUseCase {
  findById: (id: string) => Promise<ShopUseCase.Result>;
  findByEmail: (email: string) => Promise<ShopUseCase.Result>;
  delete: (id: string) => Promise<boolean>;
  create: (input: ShopUseCase.Params) => Promise<ShopUseCase.Result>;
}
export namespace ShopUseCase {
  export type Params = Omit<Shop, 'id'>;
  export type Result = Shop;
}
export interface ShopRepository {
  findById: (id: string) => Promise<ShopUseCase.Result>;
  findByEmail: (email: string) => Promise<ShopRepository.Result>;
  delete: (email: string) => Promise<boolean>;
  create: (input: ShopRepository.Params) => Promise<ShopRepository.Result>;
}
export namespace ShopRepository {
  export type Params = Omit<Shop, 'id'>;
  export type Result = Shop;
}

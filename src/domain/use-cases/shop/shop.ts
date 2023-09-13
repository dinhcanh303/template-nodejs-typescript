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

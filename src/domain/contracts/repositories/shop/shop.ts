import { Shop } from '@/domain/entities';

export interface ShopRepository {
  findById: (id: string) => Promise<ShopRepository.Result>;
  findByEmail: (email: string) => Promise<ShopRepository.Result>;
  delete: (email: string) => Promise<boolean>;
  create: (input: ShopRepository.Params) => Promise<ShopRepository.Result>;
}
export namespace ShopRepository {
  export type Params = Omit<Shop, 'id'>;
  export type Result = Shop;
}

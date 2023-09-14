import { ItemEncoder } from './contracts/item-encoder';
import { ItemSpec } from './item-spec';

export class Item {
  id: string;
  spec: ItemSpec;
  imageUrl: string;
  quantity: number;
  price: number;
  constructor(
    id: string,
    spec: ItemSpec,
    imageUrl: string,
    quantity: number,
    price: number
  ) {
    this.id = id;
    this.spec = spec;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
    this.price = price;
  }
  compare(item: Item): boolean {
    return item == item;
  }
  encode(encoder: ItemEncoder): string {
    return encoder.encode(this);
  }
  saveToDB(db: string): void {}
  removeFromDB(db: string): void {}
}

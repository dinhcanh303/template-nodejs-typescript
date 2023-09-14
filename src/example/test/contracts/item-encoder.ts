import { Item } from '../item';

export interface ItemEncoder {
  encode(item: Item): string;
}

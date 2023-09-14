import { ItemEncoder } from './contracts/item-encoder';
import { Item } from './item';

export class HtmlItemEncoder implements ItemEncoder {
  encode(item: Item): string {
    return item.id;
  }
}

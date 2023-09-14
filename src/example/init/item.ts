export class Item {
  id: string;
  name: string;
  type: string;
  color: string;
  imageUrl: string;
  quantity: number;
  price: number;
  constructor(
    id: string,
    name: string,
    type: string,
    color: string,
    imageUrl: string,
    quantity: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.color = color;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
    this.price = price;
  }
  compare(item: Item): boolean {
    return item == item;
  }
  toJson(): string {
    return 'JSON';
  }
  toHtml(): string {
    return 'HTML';
  }
  saveToDB(db: string): void {}
  removeFromDB(db: string): void {}
}

export class ItemSpec {
  name: string;
  type: string;
  color: string;
  constructor(name: string, type: string, color: string) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  compare(is: ItemSpec): boolean {
    return true;
  }
}

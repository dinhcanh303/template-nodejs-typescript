import { BadRequestError } from '@/application/errors';
import { ProductUseCase } from '@/domain/use-cases';
import {
  Clothing as ClothingEntity,
  Electronic as ElectronicEntity,
  Furniture as FurnitureEntity,
  Product as ProductEntity
} from '@/domain/entities';
import {
  ClothingRepository,
  ElectronicRepository,
  FurnitureRepository,
  ProductRepository
} from '@/domain/contracts';

type ProductRegistry = {
  [key: string]: any; // Assuming is the base class
};
export class ProductFactory {
  static productRegistry: ProductRegistry = {};
  static registerProductType(type: string, classRef: any) {
    ProductFactory.productRegistry[type] = classRef;
  }
  static async createProduct(type: string, payload: any, dependencies: any) {
    const productClass = ProductFactory.productRegistry[type];
    if (!productClass)
      throw new BadRequestError(`Invalid Product type ${type}`);
    return new productClass(payload, ...dependencies).createProduct();
  }
}

export class Product {
  productName: string;
  productThumb: string;
  productDescription?: string;
  productPrice: string;
  productQuantity: string;
  productType: string;
  productShop: number;
  productAttributes: ClothingEntity | ElectronicEntity | FurnitureEntity;
  constructor(
    {
      productName,
      productThumb,
      productDescription,
      productPrice,
      productQuantity,
      productType,
      productShop,
      productAttributes
    }: ProductUseCase.Params,
    private readonly productRepository: ProductRepository,
    public readonly clothingRepository: ClothingRepository,
    public readonly electronicRepository: ElectronicRepository,
    public readonly furnitureRepository: FurnitureRepository
  ) {
    this.productName = productName;
    this.productThumb = productThumb;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.productType = productType;
    this.productShop = productShop;
    this.productAttributes = productAttributes;
  }
  async createProduct(productId: string) {
    const newProduct = await this.productRepository.create({
      ...this,
      id: productId
    });
    return newProduct;
  }
}
export class Clothing extends Product {
  override async createProduct(): Promise<ProductEntity> {
    const newClothing = await this.clothingRepository.create({
      ...this.productAttributes,
      productShop: this.productShop
    });
    if (!newClothing) throw new BadRequestError(`Create new Clothing error`);
    const newProduct = await super.createProduct(newClothing.id ?? '');
    if (!newProduct) throw new BadRequestError(`Create new Product error`);
    return newProduct;
  }
}

export class Electronic extends Product {
  override async createProduct(): Promise<ProductEntity> {
    const newElectronic = await this.electronicRepository.create({
      ...this.productAttributes,
      productShop: this.productShop
    });
    if (!newElectronic)
      throw new BadRequestError(`Create new Electronic error`);
    const newProduct = await super.createProduct(newElectronic.id ?? '');
    if (!newProduct) throw new BadRequestError(`Create new Product error`);
    return newProduct;
  }
}
export class Furniture extends Product {
  override async createProduct(): Promise<ProductEntity> {
    const newFurniture = await this.furnitureRepository.create({
      ...this.productAttributes,
      productShop: this.productShop
    });
    if (!newFurniture) throw new BadRequestError(`Create new Furniture error`);
    const newProduct = await super.createProduct(newFurniture.id ?? '');
    if (!newProduct) throw new BadRequestError(`Create new Product error`);
    return newProduct;
  }
}

ProductFactory.registerProductType('Electronic', Electronic);
ProductFactory.registerProductType('Clothing', Clothing);
ProductFactory.registerProductType('Furniture', Furniture);

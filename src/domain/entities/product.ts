import { Clothing } from './clothing';
import { Electronic } from './electronic';
import { Furniture } from './furniture';

export type Product = {
  id?: string;
  productName: string;
  productThumb: string;
  productDescription?: string;
  productPrice: string;
  productQuantity: string;
  productType?: string;
  productShop: number;
  productAttributes: Clothing | Electronic | Furniture;
  productRatingAverage: number;
  productVariations: Array<string>;
  isDraft: boolean;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

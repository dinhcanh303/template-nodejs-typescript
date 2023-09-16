import { String40 } from 'aws-sdk/clients/sagemaker';

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
  productRatingAverage?: number;
  productVariations?: Array<string>;
  isDraft?: boolean;
  isPublished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
export type Electronic = {
  id?: string;
  manufacturer?: string;
  model?: string;
  color?: string;
  productShop: number;
};
export type Clothing = {
  id?: string;
  brand?: string;
  size?: string;
  material?: string;
  productShop: number;
};
export type Furniture = {
  id?: string;
  brand?: string;
  size?: string;
  material?: string;
  productShop: number;
};

export interface ProductInteface {
  id: number;
  productType: string;
}

export class Product implements ProductInteface {
  id!: number;
  productType!: string;
}

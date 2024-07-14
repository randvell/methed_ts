import Product from './Product';

export default abstract class AbstractSelling {
  public DISCOUNT_TYPE: string | null = null;

  constructor(private product: Product, private count: number) {}

  abstract getPrice(): number;

  public getCount(): number {
    return this.count;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getProductPrice(): number {
    return this.product.getPrice();
  }

  compare(other: AbstractSelling): number {
    return other.getPrice() - this.getPrice();
  }
}

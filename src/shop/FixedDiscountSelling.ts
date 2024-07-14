import AbstractSelling from './AbstractSelling';

export default class FixedDiscountSelling extends AbstractSelling {
  private static readonly DISCOUNT: number = 10;
  public DISCOUNT_TYPE: string = 'fixed';

  getPrice(): number {
    return (
      (this.getProductPrice() - FixedDiscountSelling.DISCOUNT) * this.getCount()
    );
  }
}

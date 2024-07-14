import AbstractSelling from './AbstractSelling';
import Product from './Product';

class BulkDiscountSelling extends AbstractSelling {
  private static readonly DISCOUNT_PERCENTAGE: number = 10;
  public DISCOUNT_TYPE: string = 'bulk';

  constructor(
    product: Product,
    quantity: number,
    private bulkQuantity: number
  ) {
    super(product, quantity);
  }

  getPrice(): number {
    const pricePerUnit = this.getProductPrice();
    let totalPrice = pricePerUnit * this.getCount();

    if (this.getCount() >= this.bulkQuantity) {
      totalPrice *= 1 - BulkDiscountSelling.DISCOUNT_PERCENTAGE / 100;
    }

    return parseFloat(totalPrice.toFixed(2));
  }
}

export default BulkDiscountSelling;

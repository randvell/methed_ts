import Product from './Product';
import FixedDiscountSelling from './FixedDiscountSelling';
import BulkDiscountSelling from './BulkDiscountSelling';
import AbstractSelling from './AbstractSelling';

const purchases: AbstractSelling[] = [
  new FixedDiscountSelling(new Product('Product1', 100), 3),
  new FixedDiscountSelling(new Product('Product2', 200), 5),
  new FixedDiscountSelling(new Product('Product3', 150), 2),
  new FixedDiscountSelling(new Product('Product4', 120), 7),
  new BulkDiscountSelling(new Product('Product5', 100), 4, 3),
  new BulkDiscountSelling(new Product('Product6', 200), 6, 5),
  new BulkDiscountSelling(new Product('Product7', 150), 2, 3),
  new BulkDiscountSelling(new Product('Product8', 120), 8, 5),
];

purchases.sort((a: AbstractSelling, b: AbstractSelling) => a.compare(b));

console.log('Purchases:');
purchases.forEach((purchase: AbstractSelling, i: number) => {
  const qty: number = purchase.getCount();
  const productPrice: number = purchase.getProduct().getPrice();
  const finalPrice: number = purchase.getPrice();
  const fullPrice: number = productPrice * qty;
  const diff: number = fullPrice - finalPrice;

  let logData: string = `#${i + 1} - ${qty} x ${purchase
    .getProduct()
    .getName()} (${productPrice}): Final Price: $${finalPrice}`;

  if (diff) {
    logData += ` / Full Price: $${fullPrice} / Discount: $${diff} (${purchase.DISCOUNT_TYPE})`;
  }

  console.log(logData);
});

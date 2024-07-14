export default class Product {
  constructor(private name: string, private price: number) {}

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  getPrice(): number {
    return this.price;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  getName(): string {
    return this.name;
  }
}

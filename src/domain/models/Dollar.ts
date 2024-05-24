import { Price } from "./Price";

export interface IDollar {
  readonly name: string;
  readonly valuePurchase: Price;
  readonly valueSale: Price;
}

export class Dollar {
    
  private name: string;
  private valuePurchase: Price;
  private valueSale: Price;

  constructor(args: IDollar) {
    this.name = args.name;
    this.valuePurchase = Price.create(args.valuePurchase);
    this.valueSale = Price.create(args.valueSale);
  }

  public getName = (): string => {
    return this.name;
  };

  public getValuePurchase = (): Price => {
    return this.valuePurchase;
  };

  public getValueSale = (): Price => {
    return this.valueSale;
  };
}

import { IPrice } from "./Price";

export interface IDollar {
  readonly name: string;
  readonly valuePurchase: IPrice;
  readonly valueSale: IPrice;
}

export class Dollar {
    
  private name: string;
  private valuePurchase: IPrice;
  private valueSale: IPrice;

  constructor(args: IDollar) {
    this.name = args.name;
    this.valuePurchase = args.valuePurchase;
    this.valueSale = args.valueSale;
  }

  public getName = (): string => {
    return this.name;
  };

  public getValuePurchase = (): IPrice => {
    return this.valuePurchase;
  };

  public getValueSale = (): IPrice => {
    return this.valueSale;
  };
}

export interface IPrice {
  readonly value: number;
}

export class Price {
  private value: number;

  constructor(args: IPrice) {
    this.value = args.value;
  }

  public getValue = (): number => {
    return this.value;
  };

}
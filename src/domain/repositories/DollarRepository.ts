import { Dollar } from "../models/Dollar";

export interface DollarRepository {
  readonly getDollars: () => Promise<Dollar[]>;
}

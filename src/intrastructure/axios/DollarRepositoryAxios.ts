import { Dollar, IDollar } from "../../domain/models/Dollar";
import { DollarRepository } from "../../domain/repositories/DollarRepository";
import { AxiosApp } from "./AxiosConfig";

export class DollarRepositoryAxios implements DollarRepository {
  public async getDollars(): Promise<Dollar[]> {
    return AxiosApp.get<IDollar[]>("/").then((res) => {
      const dollars: Dollar[] = [];
      const { data } = res;
      data.map((e) => dollars.push(new Dollar(e)));
      return dollars;
    });
  }
}

import { DollarRepository } from "../../domain/repositories/DollarRepository";

export class ShowHomeUseCase {
  private repository: DollarRepository;

  constructor(repository: DollarRepository) {
    this.repository = repository;
  }

  public getDollars = async () => {
    return this.repository.getDollars();
  };
}

import { ShowHomeUseCase } from "./ShowHomeUseCase";

export interface UseCaseFactory {
  readonly showMenuUseCase: ShowHomeUseCase;
}

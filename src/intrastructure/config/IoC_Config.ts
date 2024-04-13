import { ShowHomeUseCase } from "../../application/usecases/ShowHomeUseCase";
import { UseCaseFactory } from "../../application/usecases/UseCaseFactory";
import { DollarRepositoryAxios } from "../axios/DollarRepositoryAxios";

export const useCases: UseCaseFactory = {
    showMenuUseCase : new ShowHomeUseCase( new DollarRepositoryAxios())
};

import * as React from "react";
import { UseCaseFactory } from "../../application/usecases/UseCaseFactory";
import { Home } from "./home/Home";

interface UIProps {
  readonly useCases: UseCaseFactory;
}

export const UI: React.FC<UIProps> = ({ useCases }) => {
  return <Home useCases={useCases} />;
};

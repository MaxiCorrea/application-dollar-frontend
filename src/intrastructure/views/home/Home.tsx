import * as React from "react";
import { UseCaseFactory } from "../../../application/usecases/UseCaseFactory";
import { MxScrollbar } from "@maxicorrea/mx-scrollbar";
import { MxHeader } from "@maxicorrea/mx-header";
import { Dollar as DollarModel } from "../../../domain/models/Dollar";
import { Dollar as DollarView } from "./Dollar";
import pkg from "../../../../package.json";
import logo from "../assets/dollar-logo.png";
import { MxSpinner } from "@maxicorrea/mx-spinner";

interface HomeProps {
  readonly useCases: UseCaseFactory;
}

export const Home: React.FC<HomeProps> = ({ useCases }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dollars, setDollars] = React.useState<DollarModel[]>([]);

  React.useEffect(() => {
    setLoading(true);
    useCases.showMenuUseCase
      .getDollars()
      .then((res) => {
        setDollars(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [useCases.showMenuUseCase]);

  const renderDollars = (values: DollarModel[]) => {
    const tags: React.ReactNode[] = [];
    values.forEach((e) => {
      tags.push(<DollarView key={e.getName()} dollar={e} />);
    });
    return tags;
  };

  return (
    <MxScrollbar>
      <MxHeader
        tooltipText={`Application Dollar v${pkg.version}`}
        logoSrc={`${logo.toString()}`}
        onClickLogo={() => {
          window.location.reload();
        }}
      />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        {loading && <MxSpinner />}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
          {renderDollars(dollars)}
        </div>
      </main>
    </MxScrollbar>
  );
};

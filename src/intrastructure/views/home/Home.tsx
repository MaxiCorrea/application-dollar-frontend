import * as React from "react";
import { UseCaseFactory } from "../../../application/usecases/UseCaseFactory";
import { MxScrollbar } from "@maxicorrea/mx-scrollbar";
import { MxHeader } from "@maxicorrea/mx-header";
import pkg from "../../../../package.json";
import logo from "../assets/dollar-logo.png";

interface HomeProps {
  readonly useCases: UseCaseFactory;
}

export const Home: React.FC<HomeProps> = ({ useCases }) => {
  return (
    <MxScrollbar>
      <MxHeader
        tooltipText={`Application Dollar v${pkg.version}`}
        logoSrc={`${logo.toString()}`}
        onClickLogo={()=>{
          window.location.reload();
        }}
      />
      <div style={{ 
          display : "flex",
          justifyContent : "center",
          alignItems : "flex-start",
          height: "100vh", 
          overflowY: "scroll",
        }}>
       
      </div>
    </MxScrollbar>
  );
};

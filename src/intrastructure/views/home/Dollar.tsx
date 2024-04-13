import * as React from "react";
import { Dollar as DollarModel } from "../../../domain/models/Dollar";
import { Price } from "./Price";

interface IDollarProps {
  readonly dollar: DollarModel;
}

export const Dollar: React.FC<IDollarProps> = ({ dollar }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems : "center",
        margin: "10px",
      }}
    >
      <h2>{dollar.getName()}</h2>
      <Price title="Compra" price={dollar.getValuePurchase()} />
      <Price title="Venta" price={dollar.getValueSale()} />
    </div>
  );
};

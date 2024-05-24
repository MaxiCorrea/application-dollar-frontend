import * as React from "react";
import { Dollar as DollarModel } from "../../../domain/models/Dollar";
import { Price } from "./Price";
import { Title } from "./Title";

interface IDollarProps {
  readonly dollar: DollarModel;
}

export const Dollar: React.FC<IDollarProps> = ({ dollar }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        margin: "10px",
        boxShadow: "0px 15px 19px rgba(168, 127, 243, 0.30)",
        borderRadius: "10px",
      }}
    >
      <Title text={dollar.getName()} />
      <Price title="Compra" price={dollar.getValuePurchase()} />
      <Price title="Venta" price={dollar.getValueSale()} />
    </div>
  );
};

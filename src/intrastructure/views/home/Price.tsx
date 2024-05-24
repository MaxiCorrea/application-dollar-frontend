import * as React from "react";
import { Price as ModelPrice } from "../../../domain/models/Price";

interface IPriceProps {
  readonly title: string;
  readonly price: ModelPrice;
}

export const Price: React.VFC<IPriceProps> = ({ price, title }) => {


  if(!price.isValid()) return null;

  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        justifyContent: "center",
        alignItems: "baseline",
        fontFamily: "Gotham",
        fontSize: "13px"
      }}
    >
      <h4>{title}</h4>
      <div style={{ minWidth: "10px" }} />
      <p>{`$ ${price.getValue()}`}</p>
    </div>
  );
};

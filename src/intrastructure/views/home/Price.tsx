import * as React from "react";
import { IPrice } from "../../../domain/models/Price";

interface IPriceProps {
  readonly title: string;
  readonly price: IPrice;
}

export const Price: React.VFC<IPriceProps> = ({ price, title }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h4>{title}</h4>
      <div style={{minWidth : "10px"}}/>
      <p>{`$ ${price.value}`}</p>
    </div>
  );
};

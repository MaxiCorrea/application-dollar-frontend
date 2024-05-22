import * as React from "react";

interface TitleProps {
  readonly text: string;
}

export const Title: React.VFC<TitleProps> = (props) => {
  return (
    <h2
      style={{
        marginTop: "25px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "0px",
        fontFamily: "Gotham",
        fontSize : '20px',
        color: '#925FF0',
      }}
    >
      {props.text}
    </h2>
  );
};

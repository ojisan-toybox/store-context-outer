import * as React from "react";
import { StateContext } from "./";

export const Count = () => {
  const context = React.useContext(StateContext);
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return <div style={style}>count: {context.count}</div>;
};

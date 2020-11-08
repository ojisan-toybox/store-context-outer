import * as React from "react";
import { Count } from "./count";
import { Counter } from "./counter";
import { Count_2nd } from "./count_2nd";

export const App = () => {
  return (
    <>
      <Count></Count>
      <Count></Count>
      <Count></Count>
      <Count_2nd></Count_2nd>
      <Count_2nd></Count_2nd>
      <Count_2nd></Count_2nd>
      <Counter></Counter>
    </>
  );
};

import * as React from "react";
import { StateContext, StateHandleContext } from ".";

export const Counter = () => {
  const setState = React.useContext(StateHandleContext);
  const state = React.useContext(StateContext);

  return (
    <>
      <button
        onClick={() => {
          setState({ ...state, count: state.count + 1 });
        }}
      >
        count up
      </button>
      <button
        onClick={() => {
          setState({ ...state, count_2nd: state.count_2nd + 1 });
        }}
      >
        count_2nd up
      </button>
    </>
  );
};

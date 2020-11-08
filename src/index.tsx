import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { App } from "./app";

type storeType = {
  count: number;
  count_2nd: number;
};

export const StateContext = React.createContext<storeType>({
  count: 0,
  count_2nd: 0,
});

export const StateHandleContext = React.createContext<
  React.Dispatch<React.SetStateAction<storeType>>
>(undefined as any);

const RouteAndState = () => {
  const [state, setState] = React.useState<storeType>({
    count: 0,
    count_2nd: 0,
  });
  return (
    <StateContext.Provider value={state}>
      <StateHandleContext.Provider value={setState}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <div>
                this is page1. <Link to="/page2">go to page2</Link>
              </div>
              <App></App>
            </Route>
            <Route path="/page2" exact>
              <div>
                this is page2. <Link to="/">go to page1</Link>
              </div>
            </Route>
          </Switch>
        </Router>
      </StateHandleContext.Provider>
    </StateContext.Provider>
  );
};

ReactDOM.render(
  <RouteAndState></RouteAndState>,
  document.getElementById("root")
);

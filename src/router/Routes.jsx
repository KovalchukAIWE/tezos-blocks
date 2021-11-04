import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./config";

const Routes = () => (
  <Switch>
    {routes.map((el) => {
      if (el.path === "/") {
        return (
          <Route path={el.path} exact>
            <Redirect to='/bg' />
          </Route>
        );
      }
      return <Route key={el.exact} path={el.path} component={el.component} />;
    })}
  </Switch>
);

export default Routes;

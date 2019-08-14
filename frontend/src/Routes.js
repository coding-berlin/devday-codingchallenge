import React from "react";
import { Switch, Route } from "react-router";
import App from "./App";
import RabbitHolePage from "./RabbitHolePage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/rabbithole" component={RabbitHolePage} />
  </Switch>
);

export default Routes;
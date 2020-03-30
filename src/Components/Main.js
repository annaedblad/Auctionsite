import React from "react";
import { Switch, Route } from "react-router-dom";
import Auctions from './MainRoutes/Auctions';
import Details from './MainRoutes/Details';
import Admin from './MainRoutes/Admin';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auctions} />
      <Route exact path="/Details/:id" component={Details} />
      <Route exact path="/Admin" component={Admin} />
      <Route path="/:id" component={Auctions} />
    </Switch>
  );
};

export default Main;

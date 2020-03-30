import React from "react";
import { Switch, Route } from "react-router-dom";
import Auctions from './MainRoutes/Auctions';
import Details from './MainRoutes/Details';
import Admin from './MainRoutes/Admin';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auctions} />
      <Route path="/:id" component={Auctions} />
      <Route path="/Details" component={Details} />
      <Route path="/Admin" component={Admin} />
    </Switch>
  );
};

export default Main;

import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomeScreen />
            </Route>
            <Route exact path="/order">
                <OrderScreen />
            </Route>
        </Switch>
    );
};

export default Main;

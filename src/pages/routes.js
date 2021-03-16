import { Redirect, Route, Switch } from "react-router-dom";
import { Main } from "./Main/Main";
import { Profile } from './Profile/Profile';
import { Game } from "./Game/Game";
import { Info } from "./Info/Info";
import React from "react";

export const routes = () => {
  return (
    <Switch>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Redirect to="/main" />
    </Switch>
  );
};

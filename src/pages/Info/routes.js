import { Redirect, Route, Switch } from "react-router-dom";
import { News } from "./News/News";
import { Test } from "./Test/Test";
import { Moderator } from "./Moderator/Moderator";
import { Rules } from "./Rules/Rules";
import React from "react";
import { Top } from "./Top/Top";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* exact - получить точный путь. Если бы не было exact, то <Start/> тоже бы показывался */}
  
        <Route exact path="/Info/News" component={News} />
  
        <Route exact path="/Info/Test" component={Test} />
  
        <Route exact path="/Info/Rules" component={Rules} />

        <Route exact path="/Info/Top" component={Top} />

        <Route exact path="/Info/Moderator" component={Moderator} />

        <Redirect to={"/Info/News"} />
      </Switch>
    );
  }
}

import * as React from "react";
//import * as ReactDOM from "react-dom";
import { Header } from "./components/Header/Header";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';

import { routes } from "./pages/routes";

import {Contextor} from './GeneralContext';

//                                             props, state
export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className="wrapper">
        <Contextor>
          <Header />
          <div id="section" className="section">
            {routes()}
          </div>
        </Contextor>
      </div>
    );
  }
}

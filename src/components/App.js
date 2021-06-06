import React from "react";
import AppAbout from "./AppAbout";
import AppProjects from "./AppProjects";
import Navigator from "./Navigator";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//routing 
export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/Projects">
            <Navigator />
            <AppProjects />
          </Route>

          <Route path="/About">
            <Navigator />
            <AppAbout />
          </Route>

            {
          <Route path="">
            <Navigator />
            <AppAbout />
          </Route>
          }
           
        </Switch>
      </BrowserRouter>
    );
  }
}

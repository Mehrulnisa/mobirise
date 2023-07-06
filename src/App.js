import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/homePage";
import Mobirise from "./Components/HomePage/Mobirise/mobirise";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/mobirise">
            <Mobirise />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

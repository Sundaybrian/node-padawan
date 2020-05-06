import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar title="Massive Fc" />
      <ion-grid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={About} />
        </Switch>
      </ion-grid>
    </>
  );
};

export default App;

import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Watch from "../src/pages/watch/Watch";
import Register from "./pages/register/Register";
import LogIn from "../src/pages/login_pages/LogIn";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;

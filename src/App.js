import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/Single";
import NotFound404 from "./pages/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={SinglePage} />
        <Route component={NotFound404} />
      </Switch>
    </>
  );
}

export default App;

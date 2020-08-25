import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/Single";
import NotFound404 from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={SinglePage} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </AnimatePresence>
    </>
  );
}

export default App;

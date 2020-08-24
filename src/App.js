import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SinglePage from './pages/Single';


import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/:id" component={SinglePage} />
       </Switch>
    </>
  );
}

export default App;

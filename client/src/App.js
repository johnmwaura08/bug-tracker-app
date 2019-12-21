import React from "react";
import logo from "./logo.svg";

import Projects from "./Components/Projects";
import Navbarr from "./Components/Navbarr";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbarr />
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/DASHBOARD" component={Projects} />
        </Switch>
       
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;

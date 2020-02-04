import React from "react";


import Projects from "./Components/Projects";
import Navbarr from "./Components/Navbarr";
import Bugs from "./Components/Bugs"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Components/Users";
import About from "./Components/About";
import BugReports from"./Components/BugReports";

import UserReports from "./Components/UserReports";
import ProjectReportstest from "./Components/ProjectReportstest"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbarr />
        <Switch> 
          <Route path="/" exact component={About} />
          <Route path="/projects/new" component={Projects} />
          <Route path="/bugs/new" component={Bugs} />
          <Route path="/users/new" component={Users} />
          <Route path ="/projectreports/new" component={ProjectReportstest} />
          <Route path="/bugreports/new" component ={BugReports} />
          <Route path="/userreports/new" component={UserReports} />


        </Switch>


       
       
      </div>
    </Router>
  );
}



export default App;

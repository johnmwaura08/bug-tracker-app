import React from "react";


import Projects from "./Components/ProjectsFolder/Projects";
import Navbarr from "./Components/Navbarr";
import Bugs from "./Components/BugsFolder/Bugs"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Components/UsersFolders/Users";
import About from "./Components/About";
import BugReports from"./Components/BugsFolder/BugReports";

import UserReports from "./Components/UsersFolders/UserReports";
import ProjectsReports from "./Components/ProjectsFolder/ProjectsReports"
import EditProjects from "./Components/ProjectsFolder/EditProjects";
//this comment is to test git on new hp laptop

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
          <Route path ="/projectreports/new" component={ProjectsReports} />
          <Route path="/bugreports/new" component ={BugReports} />
          <Route path="/userreports/new" component={UserReports} />
          <Route path='/editprojects/:id' component={ EditProjects } />

        </Switch>


       
       
      </div>
    </Router>
  );
}



export default App;

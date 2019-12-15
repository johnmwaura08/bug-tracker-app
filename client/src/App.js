import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Components/Projects";

class App extends React.Component {


    render() {

        return (
          <div className="App">
            <Projects />
          </div>
        );
  }
}

export default App;

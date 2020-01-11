import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProjectsTable from './ProjectsTable'


export default class ProjectReportstest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects_array: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:6050/projects/')
      .then(res => {
        this.setState({
          projects_array : res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.projects_array.map((res, i) => {
      return <ProjectsTable obj={res} number={i} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> #</th>
            <th>TITLE</th>
            <th>FRONT-END:</th>
            <th>BACK-END</th>
            <th>ASSIGNED TO:</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
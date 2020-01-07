import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProjectsTable from './ProjectsTable'


export default class ProjectReportstest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:6050/projects/')
      .then(res => {
        this.setState({
          projects : res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.projects.map((res, i) => {
      return <ProjectsTable obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
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
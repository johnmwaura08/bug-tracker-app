import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BugsTable from './BugsTable'


export default class BugReports extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bugs_array: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:6050/bugs/')
      .then(res => {
        this.setState({
          bugs_array : res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.bugs_array.map((res, i) => {
      return <BugsTable obj={res} number={i} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> #</th>
            <th>TITLE</th>
            <th>PROJECT</th>
            <th>DEADLINE</th>
            <th>BUGTYPE</th>
            <th>STATUS</th>
            <th>OPERATION</th>
            {/* <th> <FontAwesomeIcon icon  ={faEdit}/></th> */}


          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
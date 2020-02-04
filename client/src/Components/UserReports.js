import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UsersTable from './UsersTable'


export default class UserReports extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users_array: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:6050/users/')
      .then(res => {
        this.setState({
          users_array : res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.users_array.map((res, i) => {
      return <UsersTable obj={res} number={i} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> #</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>OCCUPATION</th>
            <th>CONTACT</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
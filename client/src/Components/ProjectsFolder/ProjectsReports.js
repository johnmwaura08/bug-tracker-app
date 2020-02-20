import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import ProjectsTable from './ProjectsTable'
// import Button 


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const ProjectsTable = props => (
//              <tr>
//                 <td> {props.number + 1}</td>
                
//                 <td>{props.obj.title}</td>
//                 <td>{props.obj.frontEnd}</td>
//                 <td>{props.obj.backEnd}</td>
//                 {/* <td><FontAwesomeIcon icon ={faEdit} /> <br/>
//                 {/* <Link to={"/delete/"+props.obj._id}> */}
//                 {/* <span onClick={() => {props.deleteProject(props.obj._id) }}>
//                  <FontAwesomeIcon icon ={faTrash} />

//                 </span> */}
                
//                  {/* </td> */} */}
//                  <td>
//                  <button onClick={() => {props.deleteProject(props.obj._id) }} className="btn btn-danger">Delete</button>
//                 </td>

//           </tr>




// )





export default class ProjectReportstest extends Component {

  constructor(props) {
    super(props)
    // this.deleteProject = this.deleteProject.bind(this)
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
  // deleteProject(id){
  //   axios.get('htttp://localhost:6050/projects/delete'+ id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     projects: this.state.projects_array.filter(el => el._id !== id)
  //   })
  // }

  DataTable() {
    return this.state.projects_array.map((res, i) => {
      return <ProjectsTable obj={res} number={i}  key={i} />;
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
            <th>OPERATION</th>
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
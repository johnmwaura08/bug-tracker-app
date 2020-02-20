import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class ProjectsTable extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject() {
    axios
      .get("htttp://localhost:6050/projects/delete" + this.props.obj_id)
      .then(response => {
        console.log(response.data);
      });

    // this.setState({
    //   projects: this.state.projects_array.filter(el => el._id !== id)
    // })
  }
  render() {
    console.log(this.props.key);
    return (
      <tr>
        <td> {this.props.number + 1}</td>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.frontEnd}</td>
        <td>{this.props.obj.backEnd}</td>
        <td>
          <Link to={"/editprojects/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.deleteProject} className="btn btn-danger">
            remove
          </button>
        </td>
        {/* <td>    
                     {/* <FontAwesomeIcon icon ={faEdit} /> <br/> */}
        {/* <Link to={"/delete/"+this.props.obj._id}>
                 <FontAwesomeIcon icon ={faTrash} onClick={() => {this.props.deleteProject(this.props.obj._id) }}/>
                </Link>
                 </td> */}{" "}
        */}
      </tr>
    );
  }
}

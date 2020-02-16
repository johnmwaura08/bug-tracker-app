import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ProjectsTable extends Component {
    render() {
        console.log(this.props.key)
        return (
            <tr>
                <td> {this.props.number + 1}</td>
                
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.frontEnd}</td>
                <td>{this.props.obj.backEnd}</td>
                <td><FontAwesomeIcon icon ={faEdit} /> <br/>
                <Link to={"/delete/"+this.props.obj._id}>
                 <FontAwesomeIcon icon ={faTrash} onClick={() => {this.props.deleteProject(this.props.obj._id) }}/>
                </Link>
                 </td>

                
                
            </tr>
        );
    }
}
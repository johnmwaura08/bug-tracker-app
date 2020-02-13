import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default class BugsTable extends Component {
    render() {
        console.log(this.props.key)
        return (
            <tr>
                <td> {this.props.number + 1}</td>
                
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.project}</td>
                <td>{this.props.obj.deadline}</td>
                <td>{this.props.obj.bugtype}</td>
                <td>{this.props.obj.status}</td>
                <td><FontAwesomeIcon icon ={faEdit} /> <br/> <FontAwesomeIcon icon ={faTrash}/></td>



                <td>
                </td>
            </tr>
        );
    }
}
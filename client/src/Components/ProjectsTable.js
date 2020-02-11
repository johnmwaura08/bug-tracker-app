import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

export default class ProjectsTable extends Component {
    render() {
        console.log(this.props.key)
        return (
            <tr>
                <td> {this.props.number + 1}</td>
                
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.frontEnd}</td>
                <td>{this.props.obj.backEnd}</td>
                <td>
                </td>
            </tr>
        );
    }
}
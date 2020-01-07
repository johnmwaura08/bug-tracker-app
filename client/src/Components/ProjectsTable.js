import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

export default class ProjectsTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.frontEnd}</td>
                <td>{this.props.obj.backEnd}</td>
                <td>
                    {/* <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button> */}
                </td>
            </tr>
        );
    }
}
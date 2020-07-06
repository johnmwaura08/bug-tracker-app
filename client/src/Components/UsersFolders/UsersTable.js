import React, { Component } from 'react';

export default class UsersTable extends Component {
    render() {
        
        return (
            <tr>
                <td> {this.props.number + 1}</td>
                
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.occupation}</td>
                <td>{this.props.obj.contact}</td>

                <td>
                </td>
            </tr>
        );
    }
}

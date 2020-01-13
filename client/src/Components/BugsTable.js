import React, { Component } from 'react';

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
            



                <td>
                </td>
            </tr>
        );
    }
}
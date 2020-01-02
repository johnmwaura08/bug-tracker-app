import React from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import React, { Component } from 'react'

 class Users extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            occupation:'',
            contact:''
        
        }

    }

    componentDidMount(){

    }

    handleUserName = event => {

        this.setState({
            username: event.target.value
        });

    };


    handleEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    handleOccupation = event => {
        this.setState({
            occupation: event.target.value
        });
    };

    handleContact = event => {
        this.setState({
            contact: event.target.value
        })
    }




    render() {
        return (
           <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for ="username">Name</Label>
                        <Input type="text" name ="username" id="username" placeholder =" employee name" value={this.state.username} onChange={this.handleUserName}/>
                    </FormGroup>
                    <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="email address" value={this.state.email} onChange={this.handleEmail}/>
                    </FormGroup>

            
                <FormGroup>
                        <Label for="Occupation">Occupation</Label>
                        <Input type="text" name="occupation" id="occupation" placeholder="job title" value={this.state.occupation} onChange={this.handleOccupation}/>
                </FormGroup>
                <FormGroup>
                        <Label for="contact">Contact</Label>
                        <Input type="text" name="contact" id="contact" placeholder="phone number"  value={this.state.contact} onChange={this.handleContact}/>
                </FormGroup>

            <Form/>



        );
    }
}

export default Users;


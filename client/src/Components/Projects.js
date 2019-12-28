import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios';
class Projects extends React.Component{

                constructor(props){


                            super(props)
                        this.state = {
                                title:'',
                                frontEnd:'',
                                backEnd: '',
                                user:'',
                                comments:'',
                             

                        }

                }



                componentDidMount(){

                    this.handleSubmit();
            
            }
            

                handleTitle = (event) => {
                    this.setState({
                        title : event.target.value
                    })
                }
                handleFrontEnd = (event) => {
                    this.setState({
                        frontEnd : event.target.value
                    })
                }
                handleBackEnd = (event) => {
                    this.setState({
                        backEnd: event.target.value
                    })
                }
                handleUserSelect= (event) => {
                    this.setState({
                        user : event.target.value
                    })
                }
                handleComments = (event) => {
                    this.setState({
                        comments : event.target.value
                    })
                }
                handleSubmit = (event) => {
                    //  event.preventDefault();
                    // alert(`${this.state.title} ${this.state.frontEnd} ${this.state.backEnd} ${this.state.user} ${this.state.comments} `)
        
                        const {title, frontEnd, backEnd, user, comments} = this.state;
                   
                        const project = {
                            title,
                            frontEnd,
                            backEnd,
                            user,
                            comments,
                         
                        };
                        axios.post('/projects', 
                            project
                        )
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });


                }


              


            render() {
                return(
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="projectTitle">Title</Label>
                            <Input value={this.state.title} onChange={this.handleTitle} type="text" name="title" id="title" placeholder="Project Name" />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="frontEnd">Front-End:</Label>
                            <Input value={this.state.frontEnd} onChange={this.handleFrontEnd} type="text" name="Front-end" id="frontEnd" placeholder="front-end used?" />
                            </FormGroup>
                        <FormGroup>
                            <Label for="backEnd">Back-End</Label>
                            <Input value={this.state.backEnd} onChange={this.handleBackEnd} type="text" name="Back-end" id="backEnd" placeholder="back-end used?" />
                        </FormGroup>

                        <FormGroup>

                            <Label for="assignUser">Assign User</Label>
                            <Input value={this.state.user} onChange={this.handleUserSelect} type="select" name="user" id="user">
                                <option>User One</option>
                                <option>User two</option>
                                <option>User three</option>
                                
                            </Input>
                        </FormGroup>
                    
                        <FormGroup>
                            <Label for="exampleText">Comments</Label>
                            <Input value={this.state.comments} onChange={this.handleComments} type="textarea" name="comments" id="comments" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                ); 
            }



  
}

export default  Projects

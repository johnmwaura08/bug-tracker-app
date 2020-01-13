import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';


class Bugs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            project: "",
            deadline: "",
            bugtype: "",
            status: "",
            comments: "",
            projects_array: [],
        };
    }

    componentDidMount(){

        this.loadProjects();


        };


    handleTitle = event => {
        this.setState({
            title: event.target.value
        });
    };

    handleProject = event => {
        this.setState({
            project: event.target.value
        });
    };

    handleDeadLine = event => {
        this.setState({
            deadline: event.target.value
        });
    };

    handleBugType = event => {
        this.setState({
            bugtype: event.target.value
        });
    };

    handleBugStatus = event => {
        this.setState({
            status: event.target.value
        });
    }

    handleComments = event => {
        this.setState({
            comments: event.target.value
        });

    };

    handleSubmit = event => {

        event.preventDefault();


        const bug = {
            title:this.state.title,
            project: this.state.project,
            deadline: this.state.deadline,
            bugtype: this.state.bugtype,
            status: this.state.status,
            comments: this.state.comments,
         
        }
        console.log(bug);


        axios.post('http://localhost:6050/bugs/add', 
            bug
        )
        .then(res => console.log(res.data))
        
        .catch(function (error) {
            console.log(error);
        });


        
        window.location = '/';

    };


    loadProjects() {
        axios({
            method: 'get',
            url: 'http://localhost:6050/projects/',
        })
            .then((response) => {



                if (response.data.length > 0) {
                    this.setState({
                      projects_array: response.data.map(project => project.title),
                      title: response.data[0].title
                    })
                  }






            
            })
            .catch((response) => console.error(response.message))

    }

    renderProjects() {
        console.log(this.state.projects_array)
        return this.state.projects_array.map((project) => (
            <option>{project}</option>
        ));
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="projectTitle">Title</Label>
                    <Input
                        value={this.state.title}
                        onChange={this.handleTitle}
                        type="text"
                        name="title"
                        id="projecttitle"
                        placeholder="Bug Name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="project">Select Project</Label>
                    <Input
                        value={this.state.project}
                        onChange={this.handleProject}
                        type="select"
                        name="project"
                        id="project"

                    >
                      {this.renderProjects()}






                    
                       
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Deadline">Deadline</Label>
                    <Input
                        value={this.state.deadline}
                        onChange={this.handleDeadLine}
                        type="text"
                        name="deadline"
                        id="deadline"
                        placeholder="deadline due?"
                    />

                </FormGroup>

                <FormGroup>
                    <Label for="bugType">Bug Type</Label>
                    <Input
                        value={this.state.bugtype}
                        onChange={this.handleBugType}
                        type="select"
                        name="type"
                        id="type"
                    >
                        <option>Functional Errors</option>
                        <option>Compilation Errors</option>
                        <option>Missing Commands</option>
                        <option>RunTime Errors</option>
                        <option>Communication Problems</option>
                        <option>Logical Errors</option>
                        <option>Inappropriate Error Handling </option>
                        <option>Calculation Issues </option>
                        <option>Control Flow Errors</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="bugType">Bug Status</Label>
                    <Input
                        value={this.state.status}
                        onChange={this.handleBugStatus}
                        type="select"
                        name="type"
                        id="type"
                    >
                        <option>IN-PROGRESS</option>
                        <option>BETA STAGE</option>
                        <option>QA-ASSIGNED</option>
                        <option>PENDING</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Comments</Label>
                    <Input
                        value={this.state.cooments}
                        onChange={this.handleComments}
                        type="textarea"
                        name="comments"
                        id="comments"
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default Bugs;
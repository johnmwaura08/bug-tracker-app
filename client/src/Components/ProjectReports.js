import React, { useState, useEffect }from 'react'

import { Table } from 'reactstrap';
import axios from 'axios';

// export class ProjectReports extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             projects_array:[]
//         }
//     }

//     componentDidMount(){

//     }


//     render() {
//         return (
            



export default function ProjectReports() {

const[projectsArray, updateProjectsArray] = useState([])

useEffect(() => {
    axios.get( 'http://localhost:6050/projects/')
        .then(function(response){
            updateProjectsArray(response.data)
        })
    
}, [])
    return (
        
            
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title:</th>
        <th>Front-End:</th>
        <th>Back-End:</th>
        <th>Assigned To: </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
    <td>{projectsArray.map(p=> <ol>{p.title}</ol>)}</td>
    <td>{projectsArray.map(p=> <ol>{p.frontEnd}</ol>)}</td>
    <td>{projectsArray.map(p=> <ol>{p.backEnd}</ol>)}</td>
      </tr>
      
    </tbody>
  </Table>   
    
    );
    

}


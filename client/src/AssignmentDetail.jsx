import React from 'react';
import CreateComment from './CreateComment';
export default function AssignmentDetail(props) {
    
    return (
        <div>
            <h1>{props.assignment.name}</h1>
            <h1>{props.assignment.date}</h1>
            <h1>{props.assignment.github_link}</h1>
            <h1>{props.assignment.type}</h1>
            <h1>{props.assignment.unit}</h1>
            <CreateComment assignment_id={props.assignment.id} onSubmit={props.onSubmit}/>
       </div>
    )
    
}
import React from 'react';

export default function AssignmentDetail(props) {
    
    return (
        <div>
            <h1>{props.assignment.name}</h1>
            <h1>Created at{props.assignment.date}</h1>
            <h1>{props.assignment.github_link}</h1>
            <h1>{props.assignment.type}</h1>
            <h1>{props.assignment.unit}</h1>
            <h1>{props.assignment.content}</h1>

       </div>
    )
    
}
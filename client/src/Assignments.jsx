import React from 'react';


export default function Assignments(props) {
  return (

    props.assignments.map(assignment => {
      return (
        <div key={assignment.id}>

          <h1>{assignment.name}</h1>

          <button onClick={() => props.fetchOneAssignment(assignment.id)}>Detail Page</button>
          <button onClick={() => props.selectAssignment(assignment)}>Update</button>
          <button onClick={() => props.handleDelete(assignment.id)}>Delete</button>

        </div>
      )

    })

  );

}
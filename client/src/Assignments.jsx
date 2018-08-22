import React from 'react';


export default function Assignments(props) {
    return (
        
       props.assignments.map(assignment => {
           return (
               <div key={assignment.id}>
                      
                   <h1>{assignment.name}</h1>
                   <h1>{assignment.date}</h1>
                   <h1>{assignment.github_link}</h1>
                   <h1>{assignment.type}</h1>
                   <h1>{assignment.unit}</h1>
                   <button onClick={() => props.fetchOneAssignment(assignment.id)}>Detail Page</button>
                   <button>Update</button>
                   <button onClick={() => props.handleDelete(assignment.id)}>Delete</button>
                    
               </div>
           )
           
       })
       
    );
    
}
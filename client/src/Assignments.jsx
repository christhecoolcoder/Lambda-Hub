import React from 'react';

export default function Assignments(props) {
    return (
        props.assignments.map(assignment => {
            return (
                <div key={assignment.id}>
                    
                    <h1>{assignment.title}</h1>
                    <button>Click</button>
                    
                    <form action="" method="post">
                    <input type="text" name="" id=""/>
                    <input type="button" value=""/>
                    </form>
                
                </div>
            )
        })
    );
}
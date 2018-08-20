import React from 'react';

export default function Assignments(props) {
    return (
        props.assignments.map(assignment => {
            return (
                <div key={assignment.id}>
                    <h1>{assignment.title}</h1>
                    <button>Click</button>
                </div>
            )
        })
    );
}
import React from 'react';

export default function Comments(props) {
    return (
       props.comments.map(comment => {
           return (
               <div key={comment.id}>
                   <h1>{comment.name}</h1>
                   <p>{comment.comment}</p>
                   <button onClick={() => props.handleCommentDelete(comment.id)}>Delete</button>
               </div>
           )
       })
    );
} 
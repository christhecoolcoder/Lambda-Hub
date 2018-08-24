import React from 'react';

export default function Comments(props) {
  return (
    props.comments.map(comment => {
      return (
        <div className='comments-box' key={comment.id}>
          <h1 className='comment-name'>{comment.name} says:</h1>
          <p className='comment-text'>{comment.comment}</p>
          <button className='delete-button' onClick={() => props.handleCommentDelete(comment.id)}>Delete Comment</button>
        </div>
      )
    })
  );
} 
import React from 'react';
import CreateComment from './CreateComment';
import moment from 'moment';

export default function AssignmentDetail(props) {

  return (
    <div>
      <h1 className='welcome-text'>LAMBDA-HUB</h1>
      <h1>{props.assignment.name}</h1>
      <h1>Created on {moment(props.assignment.date).format('MMM Do')}</h1>
      <a href={props.assignment.github_link}><h1>{props.assignment.github_link}</h1></a>
      <h1>{props.assignment.type}</h1>
      <h1>unit {props.assignment.unit}</h1>
      <h1>{props.assignment.content}</h1>
      <br />
      <CreateComment assignment_id={props.assignment.id} onSubmit={props.onSubmit} />


    </div>
  )

}
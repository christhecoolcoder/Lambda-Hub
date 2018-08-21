import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { fetchAssignments, fetchAssignment, deleteAssignment } from './services/api';
import AssignmentForm from './AssignmentForm';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchOneAssignment = this.fetchOneAssignment.bind(this);
  }

  fetchAllAssignments() {
    fetchAssignments()
      .then(({assignments}) => {
        this.setState({ assignments });
      });
  }

  componentDidMount() {
    this.fetchAllAssignments();
  }

  fetchOneAssignment(id) {
    fetchAssignment(id)
      .then(assignment => {
        this.setState({ assignment });
      });
  }

  handleDelete(id) {
    deleteAssignment(id)
      .then(res => {
        this.fetchAllAssignments();
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello LambdaHub!</h1>
        <AssignmentForm />
        <Assignments assignments={this.state.assignments} handleDelete={this.handleDelete} fetchOneAssignment={this.fetchOneAssignment}/>
      </div>
    );
  }
}



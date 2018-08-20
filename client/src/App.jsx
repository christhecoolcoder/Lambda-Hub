import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { fetchAssignments } from './services/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    }
  }

  fetchAllAssignments() {
    fetchAssignments()
    .then(assignments => {
      this.setState({ assignments: assignments.data.assignments });
    });
  }

  componentDidMount() {
    this.fetchAllAssignments();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello LambdaHub!</h1>
        <Assignments />
      </div>
    );
  }
}



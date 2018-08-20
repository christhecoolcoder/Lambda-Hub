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
      .then(data => {
        this.setState({ assignments: data });
      });
  }

  componentDidMount() {
    this.fetchAllAssignments();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello LambdaHub!</h1>
        <Assignments assignments={this.state.assignments} />
      </div>
    );
  }
}



import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { fetchAssignments, fetchAssignment, deleteAssignment } from './services/api';
import AssignmentForm from './AssignmentForm';
import AssignmentDetail from './AssignmentDetail';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Assignments',
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

  determineWhichToRender() {
    const { currentView } = this.state;
    const { assignments, assignment } = this.state;

    switch (currentView) {
      case 'Detail':
        return <AssignmentDetail assignment={assignment} />
        break;
      case 'Assignments':
        return  <Assignments assignments={assignments} handleDelete={this.handleDelete} fetchOneAssignment={this.fetchOneAssignment}/>
        break;
      case 'New Assignment':
        return   <AssignmentForm />
        break;
    }
  }

  fetchOneAssignment(id) {
    fetchAssignment(id)
      .then(assignment => {
        this.setState({  
          assignment,
          currentView: 'Detail', });
      });
  }

  assignmentForm() {
  
        this.setState({ 
          currentView: 'New Assignment', });
  }

  handleDelete(id) {
    deleteAssignment(id)
      .then(res => {
        this.fetchAllAssignments();
      })
  }

  render() {

    const links = [
      'Assignments',
      'Detail',
      'New Assignment'
    ];
    return (
      <div className="App">
        <h1>Hello LambdaHub!</h1>
        <button onClick={() => this.assignmentForm()}>New Assignment</button>
        {this.determineWhichToRender()}
       
      </div>
    );
  }
}



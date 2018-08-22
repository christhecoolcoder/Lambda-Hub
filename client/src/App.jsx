import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { fetchAssignments, fetchAssignment, deleteAssignment, saveAssignment } from './services/api';
import CreateAssignment from './CreateAssignment';
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
    this.newAssignment = this.newAssignment.bind(this);
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
      this.setState({  
        assignment,
        currentView: 'Detail', });
      });
    }
    
    handleDelete(id) {
      deleteAssignment(id)
      .then(res => {
        this.fetchAllAssignments();
      })
    }

    newAssignment(assignment) {
      saveAssignment(assignment)
        .then(({assignments}) => fetchAssignments())
        .then(({assignments}) => {
          this.setState({
            currentView: 'Assignments',
            assignments:  assignments ,
          });
        });
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
        case 'Create Assignment':
          return <CreateAssignment 
            onSubmit={this.newAssignment} />;
          break;
      }
    }
    
    render() {
      
      const links = [
        'Assignments',
        'Detail',
        'Create Assignment'
      ];
    return (
      <div className="App">
        <h1>Hello LambdaHub!</h1>
        <CreateAssignment  onSubmit={this.newAssignment} />
        <h1>Lambda Hub</h1>
        {this.determineWhichToRender()}
       
      </div>
    );
  }
}



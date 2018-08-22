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
      selectedAssignment: '',
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

  handleDelete(id) {
    deleteAssignment(id)
      .then(res => {
        this.fetchAllAssignments();
      })
  }

  render() {

    const links = [
      'Assignments',
      'Detail'
    ];
    return (
      <div className="App">
        <h1>Hello LambdaHub!</h1>
        <AssignmentForm />
        <h1>Lambda Hub</h1>
        {this.determineWhichToRender()}
       
      </div>
    );
  }
}



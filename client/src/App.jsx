import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { fetchAssignments,
         fetchAssignment, 
         deleteAssignment,
         saveAssignment, 
         updateAssignment,
         fetchComments, 
         deleteComment } from './services/api';
import CreateAssignment from './CreateAssignment';
import EditAssignment from './EditAssignment';
import AssignmentDetail from './AssignmentDetail';
import Comments from './Comments';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Assignments',
      assignments: [],
      comments: [],
      selectedAssignment: '',
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchOneAssignment = this.fetchOneAssignment.bind(this);
    this.newAssignment = this.newAssignment.bind(this);
    this.updateAssignment = this.updateAssignment.bind(this);
    this.selectAssignment = this.selectAssignment.bind(this);
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

  handleCommentDelete(id) {
    deleteComment(id)
    .then(res => {
      this.fetchAllComments();
    })
  }

  fetchAllComments(assignmentId) {
    fetchComments(assignmentId)
      .then(({comments}) => {
        this.setState({ comments });
      });
  }
  
  fetchOneAssignment(id) {
    fetchAssignment(id)
    .then(assignment => {
      this.setState({  
        assignment,
        currentView: 'Detail', });
      });
    }
  
  selectAssignment(assignment) {
    this.setState({
      currentView: 'Edit Assignment',
      selectedAssignment: assignment,
      assignments: assignment 
      });
  }

    goToForm() {
      this.setState({  
        currentView: 'Create Assignment', });
      
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

    updateAssignment(assignment) {
      updateAssignment(assignment)
        .then(({assignments}) => fetchAssignments())
        .then(({assignments}) => {
          this.setState({
            currentView: 'Assignments',
            assignments: assignments
          });
        })
    }

    determineWhichToRender() {
      const { currentView } = this.state;
      const { assignments, assignment, comments, selectedAssignment } = this.state;
  
      switch (currentView) {
        case 'Detail':
        return <div>
                <AssignmentDetail assignment={assignment} />
                <Comments comments={comments} handleCommentDelete={this.handleCommentDelete} />
              </div>
          break;
        case 'Assignments':
          return <div>
                   <button onClick={() => this.goToForm()}>Create an assignment</button>
                   <Assignments assignments={assignments} handleDelete={this.handleDelete} selectAssignment={this.selectAssignment} fetchOneAssignment={this.fetchOneAssignment}/>
                 </div>
          break;
        case 'Create Assignment':
          return <CreateAssignment onSubmit={this.newAssignment} />
          break;
        case 'Edit Assignment':
          return <EditAssignment
            onSubmit={this.updateAssignment}
            assignments={selectedAssignment} />
        break;
      }
    }
    
    render() {
      
      const links = [
        'Assignments',
        'Detail',
        'Create Assignment',
        'Edit Assignment'
      ];
    return (
      <div className="App">
        <h1 class='welcome-text'>LambdaHub</h1>
        {this.determineWhichToRender()}       
      </div>
    );
  }
}



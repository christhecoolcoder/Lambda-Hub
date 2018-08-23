import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { saveComment, fetchComments, fetchAssignments, fetchAssignment, deleteAssignment, saveAssignment } from './services/api';
import CreateAssignment from './CreateAssignment';
import AssignmentDetail from './AssignmentDetail';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Assignments',
      assignments: [],
      comments: [],
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchOneAssignment = this.fetchOneAssignment.bind(this);
    this.newAssignment = this.newAssignment.bind(this);
    this.createComment = this.createComment.bind(this);
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
    createComment(comment) {
      saveComment(comment)
      .then((comments) => fetchComments(comment.assignment_id))
      .then((comments) => {
        console.log(comments);
        this.setState({
          currentView: 'Detail',
          comments: comments,
        });
      });
    }
    
    determineWhichToRender() {
      const { currentView } = this.state;
      const { assignments, assignment, comments } = this.state;
  
      switch (currentView) {
        case 'Detail':
          return <AssignmentDetail assignment={assignment} onSubmit={this.createComment} comments={this.state.comments}/>
          break;
        case 'Assignments':
          return <div>
                   <button onClick={() => this.goToForm()}>Create an assignment</button>
                   <Assignments assignments={assignments} handleDelete={this.handleDelete} fetchOneAssignment={this.fetchOneAssignment}/>
                 </div>
          break;
        case 'Create Assignment':
          return <CreateAssignment onSubmit={this.newAssignment} />
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
        {this.determineWhichToRender()}       
      </div>
    );
  }
}



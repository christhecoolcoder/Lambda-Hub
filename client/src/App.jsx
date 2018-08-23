import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import { fetchAssignments,
         fetchAssignment,
         deleteAssignment,
         saveAssignment,
         fetchComments,
         deleteComment
         } from './services/api';
import CreateAssignment from './CreateAssignment';
import AssignmentDetail from './AssignmentDetail';
import Comments from './Comments';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Assignments',
      assignments: [],
      comments: []
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.fetchOneAssignment = this.fetchOneAssignment.bind(this);
    this.newAssignment = this.newAssignment.bind(this);
  }

  fetchAllAssignments() {
    fetchAssignments()
      .then(({assignments}) => {
        this.setState({ assignments });
      });
  }

  fetchAllComments() {
    fetchComments()
      .then(({comments}) => {
        this.setState({ comments });
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

    handleCommentDelete(id) {
      deleteComment(id)
      .then(res => {
        this.fetchAllComments();
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
          return <div>
                <AssignmentDetail assignment={assignment} />
                <Comments comments={comments} handleCommentDelete={this.handleCommentDelete} />
                </div>
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



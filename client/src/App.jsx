import React, { Component } from 'react';
import './App.css';
import Assignments from './Assignments';
import {
  saveComment,
  fetchAssignments,
  fetchAssignment,
  deleteAssignment,
  saveAssignment,
  updateAssignment,
  fetchComments,
  deleteComment
} from './services/api';
import CreateAssignment from './CreateAssignment';
import EditAssignment from './EditAssignment';
import AssignmentDetail from './AssignmentDetail';
import Comments from './Comments';
import SplashPage from './SplashPage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'SplashPage',
      assignments: [],
      comments: [],
      selectedAssignment: '',
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.fetchOneAssignment = this.fetchOneAssignment.bind(this);
    this.newAssignment = this.newAssignment.bind(this);
    this.createComment = this.createComment.bind(this);
    this.updateAssignment = this.updateAssignment.bind(this);
    this.selectAssignment = this.selectAssignment.bind(this);
  }

  fetchAllAssignments() {
    fetchAssignments()
      .then(({ assignments }) => {
        this.setState({ assignments });
      });
  }


  componentDidMount() {
    this.fetchAllAssignments();
  }

  handleCommentDelete(id) {
    deleteComment(id)
      .then(res => {
        this.setState({
          comments: this.state.comments.filter(comment => comment.id !== id)
        })
      })
  }

  fetchAllComments(assignmentId) {
    fetchComments(assignmentId)
      .then(comments => {
        this.setState({ comments });
      });
  }

  fetchOneAssignment(id) {
    fetchAssignment(id)
      .then(assignment => {
        fetchComments(assignment.id)
          .then(comments => {
            this.setState({
              assignment,
              currentView: 'Detail',
              comments
            });
          })
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
      currentView: 'Create Assignment',
    });
  }

  goToAssignments() {
    this.setState({
      currentView: 'Assignments',
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
      .then(({ assignments }) => fetchAssignments())
      .then(({ assignments }) => {
        this.setState({
          currentView: 'Assignments',
          assignments: assignments,
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
  updateAssignment(assignment) {
    updateAssignment(assignment)
      .then(({ assignments }) => fetchAssignments())
      .then(({ assignments }) => {
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
          <AssignmentDetail assignment={assignment} onSubmit={this.createComment} />
          <Comments comments={comments} handleCommentDelete={this.handleCommentDelete} />
        </div>

        break;
      case 'Assignments':
        return <div>
          <h1 className='welcome-text'>LAMBDA-HUB</h1>
          <button onClick={() => this.goToForm()}>Create an assignment</button>
          <Assignments assignments={assignments} handleDelete={this.handleDelete} selectAssignment={this.selectAssignment} fetchOneAssignment={this.fetchOneAssignment} />
        </div>
        break;

      case 'SplashPage':
        return <div>
          <SplashPage />
          <div className='splash-image'></div>
          <button className='enter-button' onClick={() => this.goToAssignments()}>{'< Enter Site >'}</button>
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
        {this.determineWhichToRender()}
      </div>
    );
  }
}



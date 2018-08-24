import React, { Component } from 'react';

class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      assignment_id: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      assignment_id: this.props.assignment_id
    });
  }
  handleSubmit(ev) {
    ev.preventDefault();
    //console.log(this.state.assignment_id);

    this.props.onSubmit(this.state);
    //this.props.onSubmit(this.state);
  }
  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1 className='comment-title'>Add Comment</h1>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea placeholder="comment"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange} rows="4" cols="50">
          </textarea>
          <br />
          <br />
          <input
            type="hidden"
            name="assignment_id"
            value={this.props.assignment_id}
          />
          <input className='create-button' type="submit" value="Add Comment" />
        </form>
      </div>
    );
  }
}

export default CreateComment;

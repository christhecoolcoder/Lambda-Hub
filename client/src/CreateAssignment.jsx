import React, { Component } from 'react';

class CreateAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      date: null,
      unit: null,
      type: null,
      github_link: null,
      content: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.props.onSubmit)
    this.props.onSubmit(this.state);
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
        <h1 className='welcome-text'>LAMBDA-HUB</h1>
        <form onSubmit={this.handleSubmit} >
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange} />
          <br />
          <label for="date">Date:</label>
          <input
            type="date"
            name="date"
            min="2018-06-18" max="2018-09-11"
            value={this.state.date}
            onChange={this.handleChange} />
          <br />
          <label for="unit">Unit:</label>
          <select name="unit" value={this.state.unit}
            onChange={this.handleChange}>
            <option value="null" />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <br />
          <label for="type">Type:</label>
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleChange} />
          <br />
          <label for="github_link">Repo on Github:</label>
          <input
            type="text"
            name="github_link"
            value={this.state.github_link}
            onChange={this.handleChange} />
          <br />
          <label for="content">Info:</label>
          <textarea
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange} />
          <br />

          <input className='create-button' type="submit" value="Create Assignment" />
        </form>
      </div>
    );
  }
}

export default CreateAssignment;
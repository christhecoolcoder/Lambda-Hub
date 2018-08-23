import React, { Component } from 'react';

class EditAssignment extends Component {
  constructor(props) {
    super(props);

    const { assignments } = props;
    this.state = {
      name: assignments.name,
      id: assignments.id,
      date: assignments.date,
      unit: assignments.unit,
      type: assignments.type,
      github_link: assignments.github_link,
      content: assignments.content,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const data = {
      name: this.state.name,
      id: this.state.id,
      date: this.state.date,
      unit: this.state.unit,
      type: this.state.type,
      github_link: this.state.githublink,
      content: this.state.content,
    }
    this.props.onSubmit(data);
  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  render() {

    return (
      <div>
        <h2>Create Assignment</h2>
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

          <input type="submit" value="Update Assignment" />
        </form>
      </div>
    );
  }
}

export default EditAssignment;

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
        <h2>Edit Assignment</h2>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.handleChange} />
          <input
            type="date" 
            name="date"
            min="2018-06-18" max="2018-09-11"
            value={this.state.date}
            onChange={this.handleChange} />
          <select name="unit" value={this.state.unit} 
                  onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input
            type="text" 
            name="type"
            value={this.state.type}
            onChange={this.handleChange} />
          <input
            type="text" 
            name="github_link"
            value={this.state.github_link}
            onChange={this.handleChange} />
          <input
            type="text" 
            name="content"
            value={this.state.content}
            onChange={this.handleChange} />
          <input 
            type="hidden" 
            name="id" 
            value={this.state.id}></input>

          <input type="submit" value="Update Assignment" />
        </form>
      </div>
    );
  }
}

export default EditAssignment;

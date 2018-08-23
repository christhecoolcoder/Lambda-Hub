import React, { Component } from 'react';

class CreateAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: '',
      unit: '',
      type: '',
      github_link: '',
      content: '', 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    //console.log(this.props.onSubmit)
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
        <h2>Create Assignment</h2>
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
          <input
            type="number" 
            name="unit"
            min="1" max="4"
            value={this.state.unit}
            onChange={this.handleChange}/>
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
          

          <input type="submit" value="Create Assignment" />
        </form>
      </div>
    );
  }
}

export default CreateAssignment;

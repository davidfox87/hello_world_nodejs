import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault(); // to prevent the default form behavior of submitting
    const target = event.target; //target will return the json key-value pair...use it to set the state of the class variables
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
        firstName: this.state.username,
        lastName: this.state.password
    };

    // send the data to the backend nodejs api
    axios.post('http://backend/api/users', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          <p>Username</p>
          <input 
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p>Password</p>
          <input 
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

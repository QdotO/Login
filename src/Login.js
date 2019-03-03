import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
      this.setState({
        username: event.target.value,
        password: this.state.password
      });
  }

  handlePasswordChange(event){
    this.setState({
      username: this.state.username,
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`Username was submitted: ${this.state.username} \n\n Password was sumbitted: ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (<form className="box" action="index.html" method="post">
      <h1>Login</h1>
      <input type="text" name="" value="" onChange={()=>{this.handleUsernameChange()}} placeholder="Username"/>
      <input type="password" name="" value="" placeholder="Password"/>
      <input type="submit" name="" value="Login"/>
    </form>) 
  }
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Username:
    //       <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
    //     </label>
    //     <br/>
    //     <label>
    //       Password:
    //       <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
    //     </label>
    //     <br/>
    //     <input type="submit" value="Submit" />
    //   </form>
    // );
  // }
}

export default Login;
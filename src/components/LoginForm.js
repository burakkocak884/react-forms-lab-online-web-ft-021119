import React from "react";
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (event) =>{
    event.preventDefault()
   if (this.state.username.length>0 && this.state.password.length > 0) {
      this.props.onSubmit({username: this.state.username, password: this.state.password});
    }

}
handleInputChange = (event) =>{
 this.setState({
      [event.target.name]: event.target.value
    })

}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
LoginForm.propType={
  onSubmit: PropTypes.func
}

export default LoginForm;

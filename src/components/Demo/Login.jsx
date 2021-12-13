import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  saveFormData = (key) => {
    return (event) => {
      this.setState({ [key]: event.target.value });
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`${username} - ${password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        ID:{' '}
        <input
          onChange={this.saveFormData('username')}
          type="text"
          name="username"
        ></input>
        Password:{' '}
        <input
          onChange={this.saveFormData('password')}
          type="password"
          name="password"
        ></input>
        <button>Login</button>
      </form>
    );
  }
}

export default Login;

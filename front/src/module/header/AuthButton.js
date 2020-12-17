import React, { Component } from 'react';


class AuthButton extends Component {


  render() {
    // Display user name and sign out button for logged in user
    // or a button to login
    return (
      this.props.isAuthenticated ? (
        <p>
          Welcome, {this.props.user.displayName}!{' '}
          <button onClick={this.props.onLogout}>Sign out</button>
        </p>
      ) : <button onClick={this.props.onLogin}>Log in</button>
    );
  }
}

export default AuthButton;

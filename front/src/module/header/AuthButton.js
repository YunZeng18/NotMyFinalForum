import React, { Component } from 'react';


class AuthButton extends Component {


  render() {
    // Display user name and sign out button for logged in user
    // or a button to login
    return (
      this.props.isAuthenticated ? (
        <p>
          Welcome, <img height="25" src={this.props.user.photos[0].value} alt={this.props.user.displayName} />
          {this.props.user.displayName}!{' '}
          <button onClick={this.props.onLogout}>Sign out</button>
        </p>
      ) : <button onClick={this.props.onLogin}>Log in</button>
    );
  }
}

export default AuthButton;

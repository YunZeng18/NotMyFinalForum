import React, { Component } from 'react';


class AuthButton extends Component {


  render() {
    // Display user name and sign out button for logged in user
    // or a "not logged in" message
    return (
      this.props.isAuthenticated ? (
        <p>
          <img
            height="25"
            src={this.props.user.photos[0].value}
            alt={this.props.user.displayName}
          />
          Welcome, {this.props.user.displayName}!{' '}
          <button onClick={this.props.onLogout}>Sign out</button>
        </p>
      ) : <p>Login </p>
    );
  }
}

export default AuthButton;

import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // const button = this.state.isLoggedIn
    // ?<button onClick={this.handleLogout}>Logout</button>
    // : <button onClick={this.handleLogin}>Login</button>;

    // let button;

    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handleLogout}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handleLogin}>Login</button>;
    // }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {this.state.isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}

        {/* <div>
          {button}
          {/* <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleLogout}>Logout</button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Auth;

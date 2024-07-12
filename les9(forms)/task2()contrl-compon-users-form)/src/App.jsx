import React, { Component } from "react";
import UserForm from "./UserForm";

class App extends Component {
  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return (
      <div className="app-container">
        <UserForm onSubmit={this.createUser} />
      </div>
    );
  }
}

export default App;
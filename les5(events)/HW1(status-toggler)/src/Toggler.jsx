import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  handleClick = () => {
    this.setState({
      status: !this.state.status
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.status ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggler;

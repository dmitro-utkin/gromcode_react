import React, { Component } from "react";
import Clock from "./Clock.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">New York</div>
          <div className="clock__time">7:00:51 AM</div>
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";

class ColorPicker extends Component {
  state = {
    hoveredColor: ""
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.hoveredColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setState({ hoveredColor: "Coral" })}
            onMouseLeave={() => this.setState({ hoveredColor: "" })}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setState({ hoveredColor: "Aqua" })}
            onMouseLeave={() => this.setState({ hoveredColor: "" })}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setState({ hoveredColor: "Bisque" })}
            onMouseLeave={() => this.setState({ hoveredColor: "" })}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

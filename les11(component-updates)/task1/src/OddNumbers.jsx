import React, { Component } from "react";

class EventNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    // this.prop.number = 70
    // nextProps.number = 71

    return nextProps.number % 2 === 1;
  }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default EventNumbers;

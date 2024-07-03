import React, { Component } from "react";
import "./clock.scss";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTime: this.getLocalTime(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ localTime: this.getLocalTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getLocalTime() {
    const { offset } = this.props;
    const localTime = getTimeWithOffset(offset);
    return localTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }

  render() {
    const { location } = this.props;
    const { localTime } = this.state;

    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{localTime}</div>
      </div>
    );
  }
}

export default Clock;

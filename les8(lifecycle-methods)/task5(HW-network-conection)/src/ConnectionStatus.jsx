import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    };
  }

  handleStatusChange = () => {
    this.setState({ isOnline: navigator.onLine });
  };

  componentDidMount() {
    window.addEventListener('online', this.handleStatusChange);
    window.addEventListener('offline', this.handleStatusChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleStatusChange);
    window.removeEventListener('offline', this.handleStatusChange);
  }

  render() {
    const { isOnline } = this.state;
    const statusClass = isOnline ? '' : 'status_offline';

    return (
      <div className={`status ${statusClass}`}>
        {isOnline ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
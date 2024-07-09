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
    const statusClass = this.state.isOnline ? '' : 'status_offline';
    const statusText = this.state.isOnline ? 'online' : 'offline';
    return <div className={`status ${statusClass}`}>{statusText}</div>;
  }
}

export default ConnectionStatus;
<div class="status status_offline">Offline</div>
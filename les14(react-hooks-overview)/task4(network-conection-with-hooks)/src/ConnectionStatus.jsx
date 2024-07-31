import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const statusClass = isOnline ? '' : 'status_offline';

  return (
    <div className={`status ${statusClass}`}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;























// import React, { Component } from "react";

// class ConnectionStatus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOnline: true
//     };
//   }

//   handleOnline = () => {
//     this.setState({ isOnline: true });
//   };

//   handleOffline = () => {
//     this.setState({ isOnline: false });
//   };

//   componentDidMount() {
//     window.addEventListener('online', this.handleOnline);
//     window.addEventListener('offline', this.handleOffline);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('online', this.handleOnline);
//     window.removeEventListener('offline', this.handleOffline);
//   }

//   render() {
//     const { isOnline } = this.state;
//     const statusClass = isOnline ? '' : 'status_offline';

//     return (
//       <div className={`status ${statusClass}`}>
//         {isOnline ? 'online' : 'offline'}
//       </div>
//     );
//   }
// }

// export default ConnectionStatus;
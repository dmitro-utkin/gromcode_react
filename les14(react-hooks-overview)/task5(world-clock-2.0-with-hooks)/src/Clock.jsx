import React, { useState, useEffect } from "react";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = getTimeWithOffset(offset);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{localTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}</div>
    </div>
  );
};

export default Clock;


















// import React, { Component } from "react";

// const getTimeWithOffset = (offset) => {
//   const currentTime = new Date();
//   const utcOffset = currentTime.getTimezoneOffset() / 60;
//   return new Date(
//     currentTime.setHours(currentTime.getHours() + offset + utcOffset)
//   );
// };

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         date: new Date(),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   getLocalTime() {
//     const { offset } = this.props;
//     const localTime = getTimeWithOffset(offset);
//     return localTime.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//   }

//   render() {
//     const { location } = this.props;
//     const localTime = this.getLocalTime();

//     return (
//       <div className="clock">
//         <div className="clock__location">{location}</div>
//         <div className="clock__time">{localTime}</div>
//       </div>
//     );
//   }
// }

// export default Clock;

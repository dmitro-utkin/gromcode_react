import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = ({ isOnline }) => {
  return isOnline ? <Online /> : <Offline />;
};

export default Status;


















// import React, { Component } from "react";
// import Info from "./Info.jsx";

// const text1 = "Hello, world!";
// const text2 = "Another exciting text.";

// class Page extends Component {
//   state = {
//     info: null,
//   }
//   // constructor(props) {
//   //   super(props);
//   //   this.;
//   // }

//   setText = (info) => {
//     this.setState({ info });
//   };
//   render() {
//     return (
//       <div className="page">
//         <Info text={this.state.info} />
//         <div className="actions">
//           <button className="btn" onClick={() => this.setText(text1)}>IPhone 13</button>
//           <button className="btn" onClick={() => this.setText(text2)}>IPhone 13 Pro</button>
//           <button className="btn" onClick={() => this.setText('')}>Clear</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Page;
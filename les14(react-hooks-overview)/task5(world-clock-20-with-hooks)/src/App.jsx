import React, { useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="btn" onClick={toggle}>
        {visible ? "Hide" : "Show"}
      </button>
      <div className="clocks">
        {visible && <Clock location="New York" offset={-5} />}
        {visible && <Clock location="Kyiv" offset={2} />}
        {visible && <Clock location="London" offset={0} />}
      </div>
    </>
  );
};

export default App;












// import React, { Component } from "react";
// import Clock from "./Clock.jsx";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: true,
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button className="btn" onClick={this.toggle}>
//           {this.state.visible ? "Hide" : "Show"}
//         </button>
//         <div className="clocks">
//           {this.state.visible && <Clock location="New York" offset={-5} />}
//           {this.state.visible && <Clock location="Kyiv" offset={2} />}
//           {this.state.visible && <Clock location="London" offset={0} />}
//         </div>
//       </>
//     );
//   }
// }

// export default App;

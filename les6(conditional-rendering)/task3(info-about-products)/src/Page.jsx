import React, { Component } from "react";
import Info from "./Info.jsx";

class Page extends Component {
  state = {
    info: "",
  };

  handleItemClick = (item) => {
    let text;
    switch (item) {
      case "iPhone13":
        text = "IPhone 13 - Price is 500$. Available in 2 colors";
        break;
      case "iPhone13Pro":
        text = "IPhone 13 Pro - Price is 650$. Not available";
        break;
      default:
        text = "";
        break;
    }
    this.setState({ info: text });
  };

  handleClearClick = () => {
    this.setState({ info: "" });
  };

  render() {
    return (
      <div className="page">
        <Info info={this.state.info} />
        <div className="actions">
          <button className="btn" onClick={() => this.handleItemClick("iPhone13")}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.handleItemClick("iPhone13Pro")}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={this.handleClearClick}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;


















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
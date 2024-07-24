import React, { useState } from "react";
import Dialog from "./Dialog.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideDialog = () => {
    setIsOpen(false);
  };

  const showDialog = () => {
    setIsOpen(true);
  };

  return (
    <div className="app">
      <button className="btn" onClick={showDialog}>
        Show dialog
      </button>
      <Dialog isOpen={isOpen} onClose={hideDialog} title="Recommendation">
        <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
      </Dialog>
    </div>
  );
};

export default App;








// import React, { useState } from "react";
// import Dialog from "./Dialog.jsx";

// class App = () => {
//   state = {
//     isOpen: false,
//   };

//   hideDialog = () => {
//     this.setState({
//       isOpen: false,
//     });
//   };

//   showDialog = () => {
//     this.setState({
//       isOpen: true,
//     });
//   }

//   onClick = () => {
//     this.hideDialog();
//   }

//   render() {
//     return (
//       <div className="app">
//         <button className="btn" onClick={this.showDialog}>
//           Show dialog
//         </button>
//         <Dialog 
//           isOpen={this.state.isOpen} 
//           onClose={this.hideDialog} 
//           title="Recommendation"
//         >
//           <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
//         </Dialog>
//       </div>
//     );
//   }
// }

// export default App;

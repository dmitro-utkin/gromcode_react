import React, { useState } from "react";
import Expand from "./Expand.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <Expand isOpen={isOpen} title="Some title" handleToggle={handleToggle}>
        <p>
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </p>
      </Expand>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Expand from "./Expand.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleIcon = isOpen ? faChevronUp : faChevronDown;

  return (
    <div className="app">
      <button className="btn" onClick={handleToggle}>
        <FontAwesomeIcon icon={toggleIcon} />
      </button>
      <Expand isOpen={isOpen} title="Some title" handleToggle={handleToggle}>
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
        </p>
      </Expand>
    </div>
  );
};

export default App;

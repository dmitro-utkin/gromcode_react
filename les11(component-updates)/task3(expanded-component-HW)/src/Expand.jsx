import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Expand = ({ isOpen, children, title }) => {
  const toggleIcon = isOpen ? faChevronUp : faChevronDown;

  return (
    <div className="app">
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={() => console.log("Toggle button clicked")}>
            <FontAwesomeIcon icon={toggleIcon} />
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

Expand.defaultProps = {
  isOpen: false,
};

export default Expand;

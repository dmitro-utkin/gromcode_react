import React from "react";
import PropTypes from "prop-types";

const Expand = ({ isOpen, children, title, handleToggle }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={handleToggle}>
          <i
            className={`expand__toggle-icon fa ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  isOpen: false,
};

export default Expand;

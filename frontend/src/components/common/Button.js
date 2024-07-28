import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;

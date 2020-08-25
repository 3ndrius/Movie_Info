import React from "react";
import "./more.scss";
import PropTypes from "prop-types";

const More = ({ onClick, text }) => {
  return (
    <div className="main__more-btn" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default More;

More.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}
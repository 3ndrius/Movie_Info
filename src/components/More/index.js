import React from "react";
import './more.scss';

const More = ({onClick, text}) => {
  return (
    <div className="main__more-btn" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default More;

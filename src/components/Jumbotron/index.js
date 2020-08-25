import React from "react";
import "./jumbotron.scss";

const Jumbotron = ({ image, title, text }) => {
  return (
    <div
      className="jumbotron"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${image}'), #1c1c1c`,
      }}
    >
      <div className="jumbotron__content">
        <div className="jumbotron__text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;

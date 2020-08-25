import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import PropTypes from "prop-types";

const Navigation = ({ movie }) => {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{movie}</p>
      </div>
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  movie: PropTypes.string
}
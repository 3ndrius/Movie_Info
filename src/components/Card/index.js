import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Card({
  movieId,
  movieName,
  image,
  clickable,
}) {
  return (
    <li>
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}`,
            movieName: `${movieName}`,
          }}
        >
          <img src={image} alt="moviethumb" />
        </Link>
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </li>
  );
}





Card.propTypes = {
  movieId: PropTypes.number,
  movieName: PropTypes.string,
  image: PropTypes.string,
  clickable: PropTypes.bool
}



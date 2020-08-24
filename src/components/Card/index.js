import React from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

export default function Card({ movieId, movieName, image, clickable }) {
  return (
    <li className="main__card">
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
        <img src={ image} alt="moviethumb" />
      )}
    </li>
  );
}

import React from "react";
import { Link } from "react-router-dom";

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

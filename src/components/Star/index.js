import React from "react";
import { IMAGE_BASE_URL } from "../../config";

const Star = ({ actor }) => {
  const POSTER_SIZE = "w154";
  return (
    <li>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : "./images/no_image.jpg"
        }
        alt="actorthumb"
      />
      <div>
        <h3 className="single-movie__name">{actor.name}</h3>
        <h4 className="single-movie__character">{actor.character}</h4>
      </div>
    </li>
  );
};

export default Star;

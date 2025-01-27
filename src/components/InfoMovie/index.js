import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import Card from "../Card";
import "./infoMovie.scss";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

const InfoMovie = ({movie, directors}) => {
  return (
    <div
      className="movie-info"
      style={{
        background: movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
          : "#000",
      }}
    >
      <div className="movie-info__content">
        <ul className="movie-info__list">
          <Card
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : "./images/no_image.jpg"
            }
            clickable={false}
          />
        </ul>
        <div className="movie-info__text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="movie-info__rate">
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={movie.vote_average * 10}
            ></meter>
            <p className="movie-info__score">{movie.vote_average}</p>
          </div>
          {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {directors.map((element, i) => {
            return (
              <p key={i} className="movie-info__director">
                {element.name}
              </p>
            );
          })}
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  );
};

export default InfoMovie;

InfoMovie.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array
}
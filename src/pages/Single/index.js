import React, { Component } from "react";
import { API_URL, API_KEY } from "../../config.js";
import InfoMovie from "../../components/InfoMovie";
import "./single.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Star from "../../components/Star/index";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  };
  componentDidMount() {
    if (localStorage.getItem(`${this.props.match.params.id}`)) {
      const state = JSON.parse(
        localStorage.getItem(`${this.props.match.params.id}`)
      );
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endpoint = `${API_URL}movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`;
      this.fetchItems(endpoint);
    }
  }

  fetchItems = async (endpoint) => {
    const data = await fetch(endpoint);
    const result = await data.json();
    if (result.status_code) {
      this.setState({ loading: false });
    } else {
      this.setState({ movie: result }, async () => {
        const endpoint = `${API_URL}movie/${this.props.match.params.id}/credits?api_key=${API_KEY}`;
        const data = await fetch(endpoint);
        const result = await data.json();
        const directors = result.crew.filter(
          (member) => member.job === "Director"
        );

        this.setState(
          {
            actors: result.cast,
            directors,
            loading: false,
          },
          () => {
            localStorage.setItem(
              `${this.props.match.params.movieId}`,
              JSON.stringify(this.state)
            );
          }
        );
      });
    }
  };

  render() {
    return (
      <>
        <Header padding />
        <Navigation movie={this.props.location.movieName} />
        <div className="single-movie">
          {this.state.movie ? (
            <div>
              <InfoMovie
                movie={this.state.movie}
                directors={this.state.directors}
              />
            </div>
          ) : null}
          {this.state.actors ? (
            <div className="single-movie__grid"></div>
          ) : null}
          {!this.state.actors && !this.state.loading ? (
            <h1>No Movie Found!</h1>
          ) : null}
          {this.state.actors ? (
            <div className="single-movie__grid">
              <ul className="single-movie__list">
                {this.state.actors.map((element, i) => {
                  return (
                    <Star
                      key={i}
                      actor={element}
                      loading={this.state.loading}
                    />
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default Movie;

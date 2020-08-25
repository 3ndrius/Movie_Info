import React, { Component } from "react";
import "./home.scss";
import Jumbotron from "../../components/Jumbotron";
import Search from "../../components/Search";
import Card from "../../components/Card";
import More from "../../components/More";
import SkeletonLoading from "../../components/SkeletonLoading";
import Header from "../../components/Header";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: "",
  };

  componentDidMount() {
    if (localStorage.getItem("HomeState")) {
      const state = JSON.parse(localStorage.getItem("HomeState"));
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(endpoint);
    }
  }

  searchItems = (searchTerm) => {
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchTerm,
    });

    searchTerm === ""
      ? (endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      : (endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`);

    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({ loading: true });

    if (this.state.searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
        this.state.currentPage + 1
      }`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = async (endpoint) => {
    try {
      const res = await fetch(endpoint);
      const resJson = await res.json();

      this.setState(
        {
          movies: [...this.state.movies, ...resJson.results],
          heroImage: this.state.heroImage || resJson.results[0],
          loading: false,
          currentPage: resJson.page,
          totalPages: resJson.total_pages,
        },
        () => {
          if (this.state.searchTerm === "") {
            localStorage.setItem("HomeState", JSON.stringify(this.state));
          }
        }
      );
    } catch (err) {
      console.error("Error", err);
    }
  };

  render() {
    return (
      <>
        <Header />
        <Jumbotron
          image={`${IMAGE_BASE_URL}w1280${this.state.heroImage?.backdrop_path}`}
          title={this.state.heroImage?.original_title}
          text={this.state.heroImage?.overview}
        />
        <main className="main">
          <Search handleSearch={this.searchItems} />
          <div className="container"></div>
          {this.state.loading ? (
            <SkeletonLoading />
          ) : (
            <ul className="main__list">
              {this.state.movies.map((element, i) => {
                return (
                  <Card
                    key={i}
                    clickable={true}
                    loading={this.state.loading}
                    image={
                      element.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                        : "./images/no_image.jpg"
                    }
                    movieId={element.id}
                    movieName={element.original_title}
                  />
                );
              })}
              )
            </ul>
          )}
          {this.state.loading ? <SkeletonLoading /> : null}
          {this.state.currentPage <= this.state.totalPages &&
          !this.state.loading ? (
            <More text="Load More" onClick={this.loadMoreItems} />
          ) : null}
        </main>
      </>
    );
  }
}

export default Home;

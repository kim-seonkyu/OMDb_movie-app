import { Component } from "../core/core";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("loading", () => {
      this.render();
    });
    movieStore.subscribe("message", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
        ${
          movieStore.state.message
            ? `<div class="message">${movieStore.state.message}</div>`
            : '<div class="movies"></div>'
        }
        <div class="the-loader hide"></div>
    `;

    const movies = this.el.querySelector(".movies");
    movies?.append(
      ...movieStore.state.movies.map((movie) => new MovieItem({ movie }).el)
    );

    const loader = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loader.classList.remove("hide")
      : loader.classList.add("hide");
  }
}

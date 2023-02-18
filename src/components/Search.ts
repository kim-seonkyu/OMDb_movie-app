import { Component } from "../core/core";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input 
        value="${movieStore.state.searchText}" 
        placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">
        Search!
      </button>
    `;

    const input = this.el.querySelector("input");
    input?.addEventListener("input", () => {
      movieStore.state.searchText = input.value;
    });
    input?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const btn = this.el.querySelector(".btn");
    btn?.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}

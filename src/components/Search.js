import { Component } from "../core/core";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
            <input placeholder="Enter the movie title to search!" />
            <button class="btn btn-primary">
                Search!
            </button>
        `;

    const input = this.el.querySelector("input");
    input.addEventListener("input", () => {
      //
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        //
      }
    });

    const btn = this.el.querySelector(".btn");
    btn.addEventListener("click", () => {
      //
    });
  }
}

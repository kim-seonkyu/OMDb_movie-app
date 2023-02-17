import { Component } from "../core/core";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
            <div>
                <a href="https://github.com/kim-seonkyu/OMDb_movie-app">GitHub Repository</a>
            </div>
            <div>
                <a href="https://github.com/kim-seonkyu">
                    ${new Date().getFullYear()}
                    KH
                </a>
            </div>
        `;
  }
}

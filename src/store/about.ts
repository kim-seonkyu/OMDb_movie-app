import { Store } from "../core/core";

interface State {
  photo: string;
  name: string;
  email: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
  name: "KH / KimKyunHa",
  email: "seonkyu93@gmail.com",
  github: "https://github.com/kim-seonkyu",
  repository: "https://github.com/kim-seonkyu/OMDb_movie-app",
});

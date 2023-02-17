import { Component } from "./core/core";
import TheHeader from "./components/Header";
import TheFooter from "./components/Footer";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view");

    this.el.append(theHeader, routerView, theFooter);
  }
}

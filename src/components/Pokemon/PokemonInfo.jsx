import { Component } from "react";
import { ToastContainer } from "react-toastify";

export default class PokemonInfo extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import PokemonForm from "./PokemonForm";
// import PokemonInfo from "./PokemonInfo";

export default class Pokemon extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  /* =============================== fetch

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((res) => res.json())
        .then((pokemon) => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  }

  ------------------------------------------- */

  render() {
    // const { pokemon, loading } = this.state;

    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <PokemonForm />
      </div>
    );
  }
}

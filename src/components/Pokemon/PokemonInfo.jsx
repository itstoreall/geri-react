import { Component } from "react";
import { fetchPokemon } from "./services/pokemonAPI";
import PokemonPendingView from "./PokemonPendingView";
import PokemonDataView from "./PokemonDataView";
import PokemonErrorView from "./PokemonErrorView";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      setTimeout(() => {
        fetchPokemon(nextName)
          .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
          .catch((error) => this.setState({ error, status: "rejected" }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    // !active
    if (status === "idle") {
      return <p>Введите имя покемона</p>;
    }

    // Loading
    if (status === "pending") {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    // Error
    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    // Done
    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

import { Component } from "react";
import { fetchPokemon } from "./services/pokemonAPI";
import PokemonPendingView from "./PokemonPendingView";
import PokemonDataView from "./PokemonDataView";
import PokemonErrorView from "./PokemonErrorView";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        fetchPokemon(nextName)
          .then((pokemon) =>
            this.setState({ pokemon, status: Status.RESOLVED })
          )
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      }, 500);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    switch (status) {
      case "idle": // !active
        return <p>Введите имя покемона</p>;
      // break;
      case "pending": // Loading
        return <PokemonPendingView pokemonName={pokemonName} />;
      // break;
      case "rejected": // Error
        return <PokemonErrorView message={error.message} />;
      // break;
      case "resolved":
        return <PokemonDataView pokemon={pokemon} />;
      // break;
      default:
        break;
    }

    // // !active
    // if (status === "idle") {
    //   return <p>Введите имя покемона</p>;
    // }

    // // Loading
    // if (status === "pending") {
    //   return <PokemonPendingView pokemonName={pokemonName} />;
    // }

    // // Error
    // if (status === "rejected") {
    //   return <PokemonErrorView message={error.message} />;
    // }

    // // Done
    // if (status === "resolved") {
    //   return <PokemonDataView pokemon={pokemon} />;
    // }
  }
}

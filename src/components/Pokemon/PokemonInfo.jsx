import { Component } from "react";

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
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }

            // Отвергает ответ от бека и генерит новый error.message
            return Promise.reject(
              new Error(`Нет покемона с именем ${nextName}`)
            );
          })
          .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
          .catch((error) => this.setState({ error, status: "rejected" }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    // !active
    if (status === "idle") {
      return <p>Введите имя покемона</p>;
    }

    // Loading
    if (status === "pending") {
      return <p>Loading...</p>;
    }

    // Error
    if (status === "rejected") {
      return <p>{error.message}</p>;
    }

    // Done
    if (status === "resolved") {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width="250"
          />
        </div>
      );
    }
  }
}

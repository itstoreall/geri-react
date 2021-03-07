import { Component } from "react";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }

            return Promise.reject(
              new Error(`Нет покемона с именем ${nextName}`)
            );
          })
          .then((pokemon) => this.setState({ pokemon }))
          .catch((error) => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    const { loading, pokemon, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && <p>{error.message}</p>}
        {loading && <p>Loading...</p>}
        {!pokemonName && <p>Введите имя покемона</p>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width="250"
            />
          </div>
        )}
      </div>
    );
  }
}

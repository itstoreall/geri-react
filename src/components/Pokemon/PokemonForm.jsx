import { Component } from "react";
import { ImSearch } from "react-icons/im";

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.carrentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonNameChange}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}

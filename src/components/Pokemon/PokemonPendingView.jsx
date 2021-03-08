import { ImSpinner } from "react-icons/im";
import PokemonDataView from "./PokemonDataView";
import pendingImage from "./pending.png";

const styles = {
  spinner: {
    color: "red",
  },
};

export default function PokemonPendingView({ pokemonName }) {
  // react skeleton
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

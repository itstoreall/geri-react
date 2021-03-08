import errorImage from "./error.jpg";

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="248" alt="sad cat" />
      <p>{message}</p>
    </div>
  );
}

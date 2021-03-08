import React from "react";
import Pokemon from "../components/Pokemon";
import "../components/Pokemon/PokemonStyle.css";

const PokemonPage = () => {
  return (
    <>
      <h1>Pokemon</h1>
      <Pokemon />

      <ul>
        <li>use React-Toastify</li>
        <li>use React Icons</li>
      </ul>
    </>
  );
};

export default PokemonPage;

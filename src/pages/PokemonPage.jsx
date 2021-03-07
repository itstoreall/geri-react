import React from "react";
import Pokemon from "../components/Pokemon";

const PokemonPage = () => {
  return (
    <>
      <h1>Pokemon</h1>
      <Pokemon />

      <ul>
        <li>use React-Toastify</li>
        {/* <li>use axios</li> */}
      </ul>
    </>
  );
};

export default PokemonPage;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PokeData() {
  const [isLoading, setIsLoading] = useState(false);
  const [datainput, setDataInput] = useState("");
  const [pokemonData, setPokemonData] = useState("");

  const fetching = async (e) => {
    setPokemonData("");
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${datainput.toLocaleLowerCase()}`
      );
      const json = await response.json();
      if (!response.ok) {
        throw new Error("The data was not been fetch, please fuck again");
      }
      console.log(json) 
      setPokemonData(json);
    } catch (error) {
      console.log(`There is a error`);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form action="">
        <label htmlFor="">
          {" "}
          Pokemon Name:
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setDataInput(e.target.value)}
          />
        </label>
        <button type="submit" onClick={fetching}>
          Submit
        </button>
        <p>{isLoading ? "...Loading" : ""}</p>
        <img src={pokemonData?.sprites?.front_default} alt="" srcset="" />
      </form>
    </>
  );
}

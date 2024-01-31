import React, { useState, useEffect } from "react";

export default function PokeData() {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    id: "",
  });
  const [dataInput, setDataInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState("");
  useEffect(() => {
    const fetching = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${dataInput}`
        );
        if (!response.ok) {
          throw new Error("Error encountered. Please Fuck Again");
        }
        const json = await response.json();
        setPokemonData(json);
        setLoading(false);
      } catch (err) {
        console.log("The Data Was Not Fetch");
      }
    };
    fetching();
  }, [dataInput]);
  console.log(pokemonData);
  //Handler

  return (
    <>
      <form action="">
        <label htmlFor="">
          Pokemon Name:
          <input
            type="text"
            value={dataInput}
            onChange={(e) => setDataInput(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

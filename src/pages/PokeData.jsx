import React, { useState, useEffect } from "react";

export default function PokeData() {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    id: "",
  });
  const [dataInput, setDataInput] = useState("");

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const json = response.json();
        setDataInput(json);
      } catch (err) {
        console.log("The Data Was Not Fetch");
      }
    };
    fetching();
  }, [pokemonData]);

  //Handler

  function inputHandler() {
    setDataInput(e.target.value);
  }
  return (
    <>
      <form action="">
        <label htmlFor="">
          Pokemon Name:
          <input type="text" onChange={(e) => inputHandler(e)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

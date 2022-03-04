import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const baseUrl = "http://localhost:3001"
  const [pokeData, setPokeData] = useState([])


  useEffect(() => {
    fetch(baseUrl + "/Pokemon")
    .then(res => res.json())
    .then(setPokeData)
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokeData={pokeData} />
    </Container>
  );
}

export default PokemonPage;

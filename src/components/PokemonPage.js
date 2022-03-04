import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const baseUrl = "http://localhost:3001"
  const [pokeData, setPokeData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    fetch(baseUrl + "/Pokemon")
    .then(res => res.json())
    .then(setPokeData)
  }, [])

  const filteredPokemon = pokeData.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))

  function handleAddPokemon(newPokeData) {
    setPokeData([...pokeData, newPokeData])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={setSearchTerm} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokeData={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;

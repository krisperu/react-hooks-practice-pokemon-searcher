import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeData}) {
  const pokeCollection = pokeData.map((pokeObj) => (
    <PokemonCard 
      key={pokeObj.id}
      name={pokeObj.name}
      hp={pokeObj.hp}
      sprites={pokeObj.sprites}
      pokeData={pokeObj}
    />
  ))
  return (
    <Card.Group itemsPerRow={6}>
      <h1>{pokeCollection}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;

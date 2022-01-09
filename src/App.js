import './App.css';
import React, { useState, useEffect } from 'react';
import PokemonThumbnail from './components/PokemonThumbnail';
import { Container,Button,CardGroup, Col, Row } from 'reactstrap';


function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results) 
  }
  useEffect(() => {
    getAllPokemons()
  }, [])
  const Cards = <CardGroup>
    {allPokemons.map((pokemon, index) => <PokemonThumbnail
      id={pokemon.id}
      name={pokemon.name}
      image={pokemon.sprites.other.dream_world.front_default}
      type={pokemon.types[0].type.name}
      key={index} />
    )}
  </CardGroup>;
  return (
    <div className="App">
      <h1>Pokemon Evolution</h1>
        <Container>
          <Row style={{ padding: '30px' }} >
            {Cards}
          </Row> 
        </Container>
      <Button color='danger' onClick={() => getAllPokemons()}>Load More...</Button>

    </div>
  );
}

export default App;

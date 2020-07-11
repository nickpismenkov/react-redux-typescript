import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './Store';
import { GetPokemon } from './actions/PokemonActions';

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleSubmit = () => dispatch(GetPokemon(name));

  return (
    <div className='App'>
      <input type='text' onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt='' />
            {pokemonState.pokemon.abilities.map((ability) => (
              <p>{ability.ability.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

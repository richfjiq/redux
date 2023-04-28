import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  getPokemons as getPokemonsAction,
  nextPage,
} from '../store/slices/pokemon';
import { RootState, useAppDispatch } from '../store';

export const PokemonApp = () => {
  const { pokemons, page, isLoading } = useSelector(
    (state: RootState) => state.pokemons
  );

  const dispatch = useAppDispatch();

  const getPokemons = useCallback(() => {
    dispatch(getPokemonsAction());
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(nextPage());
  }, [dispatch]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons, page]);

  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>
      <ul
      // style={{
      //   width: '100%',
      //   display: 'flex',
      //   flexWrap: 'wrap',
      //   padding: '50px',
      //   justifyContent: 'center',
      // }}
      >
        {pokemons.map(({ name }) => (
          // <div key={pokemon.name} style={{ margin: '10px' }}>
          //   <img
          //     src={pokemon.url}
          //     alt={`pokemon_${pokemon.name}`}
          //     width="200px"
          //     height="200px"
          //   />
          //   <p>{pokemon.name}</p>
          // </div>
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={onClick} disabled={isLoading}>
        Next
      </button>
    </div>
  );
};

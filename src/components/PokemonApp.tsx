import { useCallback, useEffect } from 'react';
import { getPokemons as getPokemonsAction } from '../store/slices/pokemon';
import { useAppDispatch } from '../store';

export const PokemonApp = () => {
  const dispatch = useAppDispatch();

  const getPokemons = useCallback(
    (page: number) => {
      dispatch(getPokemonsAction(page));
    },
    [dispatch]
  );

  useEffect(() => {
    getPokemons(10);
  }, [getPokemons]);

  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>PokemonApp</h1>
    </div>
  );
};

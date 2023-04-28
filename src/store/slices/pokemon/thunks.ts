import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonApi } from '../../../api/pokemonApi';
import { store } from '../..';

interface Pokemons {
  name: string;
  url: string;
}

export const nextPage = createAction('page/pokemons', () => {
  return {
    payload: 1,
  };
});

export const getPokemons = createAsyncThunk<Pokemons[], void>(
  'fetch/pokemons',
  async () => {
    const {
      pokemons: { page },
    } = store.getState();
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    // );
    // const data = await resp.json();
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    console.log({ data });
    return data.results;
    // return data.results;
  }
);

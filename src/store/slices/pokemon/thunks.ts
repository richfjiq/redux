import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonApi } from '../../../api/pokemonApi';

interface Pokemons {
  name: string;
  url: string;
}

export const getPokemons = createAsyncThunk<Pokemons[], number>(
  'fetch/pokemons',
  async (page = 0) => {
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    // );
    // const data = await resp.json();
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`);
    console.log({ data });
    return data.results;
    // return data.results;
  }
);

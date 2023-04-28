import { createSlice } from '@reduxjs/toolkit';
import { getPokemons, nextPage } from './thunks';

interface Pokemons {
  name: string;
  url: string;
}

export interface CounterState {
  page: number;
  pokemons: Pokemons[];
  isLoading: boolean;
}

const initialState: CounterState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // startLoadingPokemons: (state) => {
    //   state.isLoading = true;
    // },
    // setPokemons: (state, action) => {
    //   console.log(action);
    // },
    // decrement: (state) => {
    //   state.counter -= 1;
    // },
    // incrementBy: (state, action: PayloadAction<number>) => {
    //   state.counter += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(nextPage, (state, { payload }) => {
      state.page += payload;
    });
    builder.addCase(getPokemons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pokemons = payload;
    });
    builder.addCase(getPokemons.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log({ payload });
    });
  },
});

// export const { } = pokemonSlice.actions;

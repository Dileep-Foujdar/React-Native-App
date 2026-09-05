import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface tattoosState {
  selecttattoos: string;
}

const initialState: tattoosState = {
  selecttattoos: '',
};

const tattoosSlice = createSlice({
  name: 'tattoos',
  initialState,

  reducers: {
    setselectTattos: (state, action: PayloadAction<string>) => {
      state.selecttattoos = action.payload;
    },

    clearSelectTattoos: state => {
      state.selecttattoos = '';
    },
  },
});

export const {setselectTattos,clearSelectTattoos} = tattoosSlice.actions;

export default tattoosSlice.reducer

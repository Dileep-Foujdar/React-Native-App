import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface peircingState {
  selectpiercing: string;
}

const initialState: peircingState = {
  selectpiercing: '',
};

const peircingSlice = createSlice({
  name: 'peircing',
  initialState,

  reducers: {
    setselectPearcing: (state, action: PayloadAction<string>) => {
      state.selectpiercing = action.payload;
    },

    clearSelectPeircing: state => {
      state.selectpiercing = '';
    },
  },
});

export const {setselectPearcing,clearSelectPeircing} = peircingSlice.actions;

export default peircingSlice.reducer

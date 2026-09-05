import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrinkingState {
  selectDrink: string;
}

const initialState: DrinkingState = {
  selectDrink: '',
};

const drinkingSlice = createSlice({
  name: 'drinking',
  initialState,

  reducers: {
    setSelectedDrink: (state, action: PayloadAction<string>) => {
      state.selectDrink = action.payload;
    },

    clearSelectDrink: state => {
      state.selectDrink = '';
    },
  },
});

export const {setSelectedDrink,clearSelectDrink} = drinkingSlice.actions;

export default drinkingSlice.reducer

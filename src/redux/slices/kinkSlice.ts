import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface kinkState {
  selectedKinks: string[];
}

const initialState: kinkState = {
  selectedKinks: [],
};

const kinkSlice = createSlice({
  name: 'kinks',
  initialState,

  reducers: {
    toggleKink: (state, action: PayloadAction<string>) => {
      const kink = action.payload;
      if (state.selectedKinks.includes(kink)) {
        state.selectedKinks = state.selectedKinks.filter(item => item !== kink);
      } else {
        state.selectedKinks.push(kink);
      }
    },
    clearKinks: (state, action) => {
      state.selectedKinks = state.selectedKinks.filter(
        kink => kink !== action.payload,
      );
    },
  },
});

export const { toggleKink, clearKinks } = kinkSlice.actions;

export default kinkSlice.reducer;

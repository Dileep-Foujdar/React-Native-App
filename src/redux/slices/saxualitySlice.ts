import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface optionState {
  selectedOption: string[];
}

const initialState: optionState = {
  selectedOption: [],
};

const saxualitySlice = createSlice({
  name: 'optionType',
  initialState,

  reducers: {
    togleOption: (state, action: PayloadAction<string>) => {
      const option = action.payload;
      if (state.selectedOption.includes(option)) {
        state.selectedOption = state.selectedOption.filter(
          item => item !== option,
        );
      } else {
        state.selectedOption.push(option);
      }
    },
    clearOption: (state, action) => {
      state.selectedOption = state.selectedOption.filter(
        option => option !== action.payload,
      );
    },
  },
});

export const { togleOption, clearOption } = saxualitySlice.actions;

export default saxualitySlice.reducer;

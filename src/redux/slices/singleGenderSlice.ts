import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface singlegenderState {
  gender: string;
}

const initialState:singlegenderState = {
  gender: '',
};

const singleGenderSlice = createSlice({
  name: 'singlegender',
  initialState,
  reducers: {
    selectsinglegender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    clearselectedgender: state => {
      state.gender = '';
    },
  },
});

export const {selectsinglegender,clearselectedgender} = singleGenderSlice.actions;

export default singleGenderSlice.reducer;

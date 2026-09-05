import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface religionState {
  selectedReligion: string[];
}

const initialState: religionState = {
  selectedReligion: [],
};

const religionSlice = createSlice({
  name: 'religiontype',
  initialState,

  reducers: {
    togleReligion: (state, action: PayloadAction<string>) => {
      const religion = action.payload;
      if (state.selectedReligion.includes(religion)) {
        state.selectedReligion = state.selectedReligion.filter(item => item !== religion);
      }else{
        state.selectedReligion.push(religion)
      }
    },
    clearReligion:(state,action)=>{
        state.selectedReligion = state.selectedReligion.filter(
            body => body !== action.payload
        );
    }
  },
});

export const {togleReligion,clearReligion} = religionSlice.actions;

export default religionSlice.reducer;
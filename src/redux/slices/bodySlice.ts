import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface bodyState {
  selectedBody: string[];
}

const initialState: bodyState = {
  selectedBody: [],
};

const bodySlice = createSlice({
  name: 'bodytype',
  initialState,

  reducers: {
    togleBody: (state, action: PayloadAction<string>) => {
      const body = action.payload;
      if (state.selectedBody.includes(body)) {
        state.selectedBody = state.selectedBody.filter(item => item !== body);
      }else{
        state.selectedBody.push(body)
      }
    },
    clearBody:(state,action)=>{
        state.selectedBody = state.selectedBody.filter(
            body => body !== action.payload
        );
    }
  },
});

export const {togleBody,clearBody} = bodySlice.actions;

export default bodySlice.reducer;
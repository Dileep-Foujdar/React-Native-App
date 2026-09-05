import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface smookingState {
  selectedSmooking: string[];
}

const initialState: smookingState = {
  selectedSmooking: [],
};

const smookingSlice = createSlice({
  name: 'smooking',
  initialState,

  reducers: {
    togleSmooking: (state, action: PayloadAction<string>) => {
      const smooking = action.payload;
      if (state.selectedSmooking.includes(smooking)) {
        state.selectedSmooking = state.selectedSmooking.filter(item => item !== smooking);
      }else{
        state.selectedSmooking.push(smooking)
      }
    },
    clearSmooking:(state,action)=>{
        state.selectedSmooking = state.selectedSmooking.filter(
            smooking => smooking !== action.payload
        );
    }
  },
});

export const {togleSmooking,clearSmooking} = smookingSlice.actions;

export default smookingSlice.reducer;
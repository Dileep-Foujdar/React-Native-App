import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface aboutState {
    aboutUs:string,
}

const initialState:aboutState={
    aboutUs:"",
}

const aboutUsSlice = createSlice({
    name:'aboutUsSlice',
    initialState,
    reducers:{
        setaboutus:(state,action:PayloadAction<string>)=>{
            state.aboutUs = action.payload
        },
        clearaboutus:state=>{
            state.aboutUs = ''
        }

    }
})

export const {setaboutus,clearaboutus} = aboutUsSlice.actions;

export default aboutUsSlice.reducer;
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface nameState{
    userName:string
}

const initialState:nameState={
    userName:''
}

const nameSlice = createSlice({
    name:'nameslice',
    initialState,
    reducers:{
        setnewname:(state,action:PayloadAction<string>)=>{
            state.userName = action.payload
        },
        clearnewname:state=>{
            state.userName = ''
        }
    }
})

export const {setnewname,clearnewname} = nameSlice.actions;

export default nameSlice.reducer;
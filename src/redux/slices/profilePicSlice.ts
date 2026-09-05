import { PayloadAction,createSlice } from "@reduxjs/toolkit";

interface ImageState {
    imageUri : string |null;
}

const initialState: ImageState = {
    imageUri:null
}

const imageSlice = createSlice({
    name:'profileimage',
    initialState,

    reducers:{
        setImageUri:(state,action:PayloadAction<string>)=>{
            state.imageUri = action.payload;
        },
        clearImageUri:state=>{
            state.imageUri=null
        }
    }
}) 

export const { setImageUri, clearImageUri } = imageSlice.actions;

export default imageSlice.reducer;
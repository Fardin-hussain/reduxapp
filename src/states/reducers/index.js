import {createSlice} from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name : 'incDec',
    initialState : 0,
    reducers : {
        Inc : (state,action) => {
            return state += action.payload;
        },
        Dec : (state,action) => {
            return state -= action.payload;
        },
        Update_Number : (state,action) => {
            return action.payload
        },
    }  

})

export const {Inc, Dec, Update_Number} = incdecSlice.actions;
export default incdecSlice.reducer;
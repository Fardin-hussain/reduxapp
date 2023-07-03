import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
       add(state,action) {
            state.push(action.payload);
       },
       remove(state,action) {
            return state.filter((item) => item.id !== action.payload);
       },
       removeAll(state,action){
          return state = [];
       }
    }  

})



export const secondSlice = createSlice({
     name : 'calculation',
     initialState : 0,
     reducers : {
          Inc : (state,action) => {
               return state += action.payload;
           }
     }
})


export const {add, remove,removeAll} = cartSlice.actions;
export const { Inc } = secondSlice.actions;
export default cartSlice.reducer;
export default secondSlice.reducer;


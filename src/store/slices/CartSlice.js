import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : 'Cart'
    , initialState : {
        items : [],
        total : 0
    }
    , reducers : {
        addToCart : (state, action) => {
            state.items = [...state.items, action.payload];
        }
    }
})

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
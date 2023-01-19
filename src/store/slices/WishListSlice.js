import {createSlice} from "@reduxjs/toolkit";

export const WishListSlice = createSlice({
    name : 'WishList'
    , initialState : {
        items_ids : {}
    }
    , reducers : {
        addToWishList : (state, action) => {
            state.items_ids[action.payload] = true;

        },
        removeFromWishList : (state, action) => {
            state.items_ids[action.payload] = false;
        },

    }
});

export const { addToWishList, removeFromWishList }= WishListSlice.actions;
export default WishListSlice.reducer;
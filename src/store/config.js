import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlice";
import WishListReducer from "./slices/WishListSlice";

const reducer = {
    cart : CartReducer,
    wishlist : WishListReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})
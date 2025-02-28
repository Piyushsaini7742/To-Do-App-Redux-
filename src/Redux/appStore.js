import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./addSlice";

const appStore = configureStore({
    reducer: {
        add: cartReducer,
    }
})

export default appStore;
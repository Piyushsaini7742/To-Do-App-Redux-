import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "add",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item[0] !== action.payload);
        }
    }
})

export const { addItem, removeItem } = addSlice.actions;
export default addSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        cacheResults: (state, action) => {
        // ip : ["ip", "ip11"]
        state = Object.assign(state, action.payload)
        }
    }
})

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
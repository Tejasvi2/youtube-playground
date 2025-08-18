import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
       cacheResults : {},
       addSearchResults: []
    },
    reducers: {
        cacheResults: (state, action) => {
        // ip : ["ip", "ip11"]
        state.cacheResults = Object.assign(state.cacheResults, action.payload)
        },
        addSearchResults: (state, action) => {
            state.addSearchResults = [...action.payload];
        }
    }
})

export const { cacheResults, addSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: [],
        pageToken: {
            nextPageToken: '',
            prevPageToken: ''
        }
    },
    reducers: {
        loadVideos: (state, action) => {
            //  state.videos.push(action.payload);
             state.videos = [...state.videos, ...action.payload]
        },
        storePageToken: (state, action) => {
            state.pageToken.nextPageToken = action.payload.nextPageToken;
            state.pageToken.prevPageToken = action.payload.prevPageToken;
        }
    }
})


export const { loadVideos, storePageToken } = videoSlice.actions;

export default videoSlice.reducer; 
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import videoSlice from './videoSlice';


const appStore = configureStore({
    reducer: {
        search: searchSlice,
        chat: chatSlice,
        video: videoSlice
    }

})

export default appStore;
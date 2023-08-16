
import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
    reducer: {
        wordStore: slice.reducer
    }
})

export default store

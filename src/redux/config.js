import { configureStore } from "@reduxjs/toolkit"
import currentSessionReducer from "./reducers/currentSessionReducer"

export const store = configureStore({
    reducer: {
        currentSession: currentSessionReducer
    }
})

import { configureStore } from "@reduxjs/toolkit"
import currentSessionReducer from "./reducers/currentSessionReducer"
import passphraseReducer from "./reducers/passphraseReducer"

export const store = configureStore({
    reducer: {
        currentSession: currentSessionReducer,
        passphrase: passphraseReducer
    }
})

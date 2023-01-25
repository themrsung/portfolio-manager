import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    passphrase: "password"
}

const passphraseSlice = createSlice({
    name: "passphrase",
    initialState,
    reducers: {
        setPassphrase: (state, action) => {
            state.passphrase = action.payload
        }
    }
})

export const { setPassphrase } = passphraseSlice.actions
export default passphraseSlice.reducer

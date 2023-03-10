import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    userId: "",
    authKey: ""
}

const currentSessionSlice = createSlice({
    name: "currentSession",
    initialState,
    reducers: {
        setCurrentSession: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.userId = action.payload.userId
            state.authKey = action.payload.authKey

            window.sessionStorage.setItem("userId", action.payload.userId)
            window.sessionStorage.setItem("authKey", action.payload.authKey)
        },
        clearCurrentSession: (state) => {
            state.isLoggedIn = false
            state.userId = ""
            state.authKey = ""

            window.sessionStorage.removeItem("userId")
            window.sessionStorage.removeItem("authKey")
        }
    }
})

export const { setCurrentSession, clearCurrentSession } =
    currentSessionSlice.actions
export default currentSessionSlice.reducer

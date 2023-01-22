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
            state = action.payload

            window.sessionStorage.setItem("userId", action.payload.userId)
            window.sessionStorage.setItem("authKey", action.payload.authKey)
        },
        clearCurrentSession: (state) => {
            state = initialState

            window.sessionStorage.removeItem("userId")
            window.sessionStorage.removeItem("authKey")
        }
    }
})

export const { setCurrentSession, clearCurrentSession } =
    currentSessionSlice.actions
export default currentSessionSlice.reducer

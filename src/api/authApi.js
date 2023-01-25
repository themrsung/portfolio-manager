import axios from "axios"
import uuid from "react-uuid"
import { store } from "../redux/config"
import {
    clearCurrentSession,
    setCurrentSession
} from "../redux/reducers/currentSessionReducer"
import { PASSWORD_HASH_VERSION, SERVER_URL } from "./apiSettings"

export const getUsers = async () => {
    const res = await axios.get(`${SERVER_URL}/users`)
    if (!res) return []

    return res.data
}

export const getUser = async (id) => {
    const res = await axios.get(`${SERVER_URL}/users/${id}`)
    if (!res) return {}

    return res.data
}

export const validatePassword = async (id, password) => {
    const user = await getUser(id)
    if (user === {}) return false // User not found

    const doesPasswordMatch =
        user.password ===
        HashPassword.hashPassword(user.passwordHashVersion, password)
    return doesPasswordMatch
}

export const getCurrentlyLoggedInUserId = async () => {
    const sessionExistsInRedux = store.getState().currentSession.isLoggedIn
    if (sessionExistsInRedux) {
        const id = store.getState().currentSession.userId
        return id
    }

    const sessionExistsInSessionStorage = await isLoggedIn()
    if (sessionExistsInSessionStorage) {
        return window.sessionStorage.getItem("userId")
    }

    return ""
}

export const login = async (id, password) => {
    const wasLoginSuccessful = await validatePassword(id, password)
    if (!wasLoginSuccessful) return false

    store.dispatch(
        setCurrentSession({
            isLoggedIn: true,
            userId: id,
            authKey: uuid()
        })
    )
    return true
}

export const logout = () => {
    store.dispatch(clearCurrentSession())
}

export const addUser = async (user) => {
    const passwordHashedUser = user
    passwordHashedUser.password = HashPassword.hashPassword(
        PASSWORD_HASH_VERSION,
        user.password
    )
    passwordHashedUser.passwordHashVersion = PASSWORD_HASH_VERSION

    const res = await axios.post(`${SERVER_URL}/users`, passwordHashedUser)
    return res.data
}

export const updateUser = async (user) => {
    const res = await axios.put(`${SERVER_URL}/users/${user.id}`, user)
    return res.data
}

export const deleteUser = async (user) => {
    const res = await axios.delete(`${SERVER_URL}/users/${user.id}`)
    return res.data
}

export const isLoggedIn = async () => {
    const currentSessionOnServer = store.getState().currentSession
    console.log(currentSessionOnServer)
    if (!currentSessionOnServer.isLoggedIn) return false

    const doesIdMatch =
        window.sessionStorage.getItem("userId") ===
        currentSessionOnServer.userId
    const doesAuthKeyMatch =
        window.sessionStorage.getItem("authKey") ===
        currentSessionOnServer.authKey

    return doesIdMatch && doesAuthKeyMatch
}

export class HashPassword {
    static v1(password) {
        let hash = 0
        for (let i = 0; i < password.length; i++) {
            let chr = password.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }

        return hash
    }

    static hashPassword(version, password) {
        switch (version) {
            case "v1":
                return HashPassword.v1(password)
            default:
                return HashPassword.v1(password)
        }
    }
}

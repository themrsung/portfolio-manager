import axios from "axios"
import CryptoJS from "crypto-js"
import { SERVER_URL } from "./apiSettings"

const encrypt = (input, passphrase) => {
    const res = CryptoJS.AES.encrypt(input, passphrase)
    return res.toString()
}

const decrypt = (ciphertext, passphrase) => {
    return CryptoJS.AES.decrypt(ciphertext, passphrase).toString(
        CryptoJS.enc.Utf8
    )
}

export const addItem = async (item, passphrase) => {
    const stringifiedItem = JSON.stringify(item)
    const encryptedString = encrypt(stringifiedItem, passphrase)

    const res = await axios.post(`${SERVER_URL}/items`, {
        owner: item.owner,
        encryptedString: encryptedString
    })

    if (!res) return {}
    return res.data
}

export const getEncryptedItem = async (itemId) => {
    const res = await axios.get(`${SERVER_URL}/items/${itemId}`)
    if (!res) return ""

    return res.data
}

export const decryptItem = (encryptedItem, passphrase) => {
    const decryptedString = decrypt(encryptedItem.encryptedString, passphrase)
    const decryptedObject = JSON.parse(decryptedString)
    if (!decryptedObject) return {}

    return decryptedObject
}

export const getDecryptedItem = async (itemId, passphrase) => {
    return decryptItem(await getEncryptedItem(itemId), passphrase)
}

export const getEncryptedItems = async () => {
    const res = await axios.get(`${SERVER_URL}/items`)
    if (!res) return []

    return res.data
}

export const getEncryptedItemsOfUser = async (ownerId) => {
    const res = await axios.get(`${SERVER_URL}/items`, { owner: ownerId })
    if (!res) return []

    return res.data
}

export const getDecryptedItemsOfUser = async (ownerId, passphrase) => {
    const encryptedItemsOfUser = await getEncryptedItemsOfUser(ownerId)
    if (!encryptedItemsOfUser) return []

    let decryptedItems = []
    encryptedItemsOfUser.forEach((item) => {
        console.log("a")
        decryptedItems.push(decryptItem(item, passphrase))
    })

    console.log(decryptedItems)

    // const decryptedItems = encryptedItemsOfUser.filter((i) =>
    //     decryptItem(i, passphrase)
    // )

    return decryptedItems
}

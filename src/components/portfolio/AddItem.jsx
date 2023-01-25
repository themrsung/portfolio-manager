import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addItem } from "../../api/itemsApi"
import { setPassphrase } from "../../redux/reducers/passphraseReducer"

export default function AddItem() {
    const dispatch = useDispatch()

    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")

    const passphrase = useSelector((state) => state.passphrase.passphrase)
    const onPassphraseChanged = (newPass) => {
        dispatch(setPassphrase(newPass))
    }

    const [showPassphrase, setShowPassphrase] = useState(false)

    const [additionalProperties, setAdditionalProperties] = useState([])

    const onAddItemFormSubmitted = async () => {
        const newItem = {
            name: itemName,
            description: itemDescription,
            owner: "admin"
        }

        additionalProperties.forEach((ap) => {
            if (ap.key === "") return

            newItem[ap.key] = ap.value
        })

        const res = await addItem(newItem, "password")
    }

    return (
        <>
            <button
                onClick={() => {
                    setAdditionalProperties([
                        ...additionalProperties,
                        {
                            key: "",
                            value: ""
                        }
                    ])
                }}
            >
                +
            </button>

            <AddItemForm
                onSubmit={(e) => {
                    e.preventDefault()
                    onAddItemFormSubmitted()
                }}
            >
                <AddItemFormElement>
                    <AddItemFormLabel>passphrase</AddItemFormLabel>
                    <AddItemFormInput
                        value={passphrase}
                        onChange={(e) => {
                            onPassphraseChanged(e.target.value)
                        }}
                        type={showPassphrase ? "text" : "password"}
                    />
                </AddItemFormElement>

                <AddItemFormElement>
                    <AddItemFormLabel>name</AddItemFormLabel>
                    <AddItemFormInput
                        value={itemName}
                        onChange={(e) => {
                            setItemName(e.target.value)
                        }}
                    />
                </AddItemFormElement>

                <AddItemFormElement>
                    <AddItemFormLabel>description</AddItemFormLabel>
                    <AddItemFormInput
                        value={itemDescription}
                        onChange={(e) => {
                            setItemDescription(e.target.value)
                        }}
                    />
                </AddItemFormElement>

                {additionalProperties.map((ap, i) => {
                    return (
                        <AddItemFormElement key={i}>
                            <AddItemFormInput
                                value={ap.key}
                                onChange={(e) => {
                                    additionalProperties[i].key = e.target.value
                                }}
                            />
                            <AddItemFormInput
                                value={ap.value}
                                onChange={(e) => {
                                    additionalProperties[i].value =
                                        e.target.value
                                }}
                            />
                        </AddItemFormElement>
                    )
                })}

                <AddItemFormElement>
                    <button type="submit">add item</button>
                </AddItemFormElement>
            </AddItemForm>
        </>
    )
}

const AddItemForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AddItemFormElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`

const AddItemFormLabel = styled.label`
    margin-right: auto;
`

const AddItemFormInput = styled.input`
    margin-left: auto;
`

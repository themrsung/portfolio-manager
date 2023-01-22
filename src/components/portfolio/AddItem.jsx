import { useState } from "react"
import { addItem } from "../../api/itemsApi"

export default function AddItem() {
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")

    const onAddItemFormSubmitted = async () => {
        const newItem = {
            name: itemName,
            description: itemDescription,
            owner: "admin"
        }

        const res = await addItem(newItem, "password")
        console.log(res)
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onAddItemFormSubmitted()
                }}
            >
                <input
                    value={itemName}
                    onChange={(e) => {
                        setItemName(e.target.value)
                    }}
                />
                <input
                    value={itemDescription}
                    onChange={(e) => {
                        setItemDescription(e.target.value)
                    }}
                />
                <button type="submit">add item</button>
            </form>
        </>
    )
}

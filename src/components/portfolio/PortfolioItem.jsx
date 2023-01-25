import { useEffect, useState } from "react"
import { deleteItem } from "../../api/itemsApi"

export default function PortfolioItem({ decryptedItem }) {
    const [itemProps, setItemProps] = useState([])

    const formatItemProps = () => {
        const ip = []
        for (const key in decryptedItem) {
            ip.push({
                key: key,
                value: decryptedItem[key]
            })
        }

        setItemProps(ip)
    }

    const onPortfolioItemDeleted = async () => {
        const res = await deleteItem(decryptedItem.id)
    }

    const [isEditing, setIsEditing] = useState(false)
    const [currentlyEditing, setCurrentlyEditing] = useState("")
    const [currentlyEditingValue, setCurrentlyEditingValue] = useState("")

    const onPortfolioItemPropEdited = async (key) => {
        if (!isEditing) setCurrentlyEditing(key)
        else {
            const item = decryptedItem
            item[currentlyEditing] = currentlyEditingValue
        }

        setIsEditing(!isEditing)
    }

    useEffect(formatItemProps, [decryptedItem])

    const reservedKeys = ["id", "owner"]

    return (
        <>
            {itemProps.map((ip) => {
                return (
                    <>
                        <p>
                            {ip.key} : {ip.value}
                        </p>
                        {!reservedKeys.includes(ip.key) &&
                            (!isEditing ||
                                (isEditing && currentlyEditing === ip.key)) && (
                                <button
                                    onClick={() => {
                                        onPortfolioItemPropEdited(ip.key)
                                    }}
                                >
                                    Edit
                                </button>
                            )}
                    </>
                )
            })}

            <div>
                <button onClick={onPortfolioItemDeleted}>Delete</button>
            </div>
        </>
    )
}

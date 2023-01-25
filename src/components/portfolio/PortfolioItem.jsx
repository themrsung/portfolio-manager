import { useEffect, useState } from "react"
import { deleteItem } from "../../api/itemsApi"

export default function PortfolioItem({ decryptedItem }) {
    const [itemProps, setItemProps] = useState([])

    const formatItemProps = () => {
        const ip = []
        for (const key in decryptedItem) {
            ip.push({
                name: key,
                value: decryptedItem[key]
            })
        }

        setItemProps(ip)
    }

    const onPortfolioItemDeleted = async () => {
        const res = await deleteItem(decryptedItem.id)
    }

    useEffect(formatItemProps, [decryptedItem])

    return (
        <>
            {itemProps.map((ip) => {
                return (
                    <>
                        <p>
                            {ip.name} : {ip.value}
                        </p>
                    </>
                )
            })}

            <div>
                <button onClick={onPortfolioItemDeleted}>Delete</button>
            </div>
        </>
    )
}

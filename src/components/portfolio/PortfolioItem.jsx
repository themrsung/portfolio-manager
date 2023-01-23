import { useEffect, useState } from "react"

export default function PortfolioItem({ decryptedItem }) {
    const [itemProps, setItemProps] = useState([])

    useEffect(() => {
        for (const key in decryptedItem) {
            if (decryptedItem.hasOwnProperty(key)) {
                setItemProps([
                    ...itemProps,
                    { key: key, value: decryptedItem[key] }
                ])
            }
        }
    }, [])

    return (
        <>
            {itemProps.key} / {itemProps.value}
        </>
    )
}

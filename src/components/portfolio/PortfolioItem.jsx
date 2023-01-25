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
    }, [decryptedItem])

    return (
        <>
            {itemProps.map((ip) => {
                return (
                    <p key={ip.key}>
                        {ip.key} / {ip.value}
                    </p>
                )
            })}
        </>
    )
}

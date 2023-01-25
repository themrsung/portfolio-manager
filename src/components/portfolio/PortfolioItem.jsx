import { useEffect, useState } from "react"

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
        </>
    )
}

import { useEffect, useState } from "react"

export default function PortfolioItem({ decryptedItem }) {
    const [itemProps, setItemProps] = useState([])

    const formatItemProps = () => {
        const ip = []
        for (key in decryptedItem) {
            ip.push({
                name: key,
                value: decryptedItem[key]
            })
        }

        setItemProps(ip)
    }

    useEffect(formatItemProps, [])

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

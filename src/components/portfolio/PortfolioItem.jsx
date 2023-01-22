import { useEffect, useState } from "react"
import { getDecryptedItem } from "../../api/itemsApi"

export default function PortfolioItem() {
    const [item, setItem] = useState({})

    const fetch = async () => {
        const i = await getDecryptedItem("1", "password")
        setItem(i)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            {item.name} / {item.description}
        </>
    )
}

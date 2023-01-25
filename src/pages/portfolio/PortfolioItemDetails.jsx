import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDecryptedItem } from "../../api/itemsApi"
import PortfolioItem from "../../components/portfolio/PortfolioItem"

export default function PortfolioItemDetails() {
    const params = useParams()

    const [decryptedItem, setDecryptedItem] = useState({})

    const fetchItem = async () => {
        const res = await getDecryptedItem(params.id, params.passphrase)
        if (!res) return

        setDecryptedItem(res)
    }

    useEffect(() => {
        fetchItem()
    }, [])

    console.log(decryptedItem)

    return <PortfolioItem decryptedItem={decryptedItem} />
    // return <PortfolioItem decryptedItem={decryptedItem} />
}

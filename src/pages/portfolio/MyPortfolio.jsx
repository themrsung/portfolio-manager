import { useEffect, useState } from "react"
import { getCurrentlyLoggedInUserId, isLoggedIn } from "../../api/authApi"
import { store } from "../../redux/config"
import { getDecryptedItemsOfUser } from "../../api/itemsApi"
import PortfolioItemList from "../../components/portfolio/PortfolioItemList"

export default function MyPortfolio() {
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const loggedIn = await isLoggedIn()
        if (!loggedIn) return

        const userId = await getCurrentlyLoggedInUserId()
        const res = await getDecryptedItemsOfUser(userId)
        if (!res) return

        setItems(res)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
            <PortfolioItemList decryptedItems={items} />
        </>
    )
}

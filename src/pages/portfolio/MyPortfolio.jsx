import { useEffect, useState } from "react"
import { getCurrentlyLoggedInUserId, isLoggedIn } from "../../api/authApi"
import { store } from "../../redux/config"
import { getDecryptedItemsOfUser } from "../../api/itemsApi"
import PortfolioItemList from "../../components/portfolio/PortfolioItemList"

export default function MyPortfolio() {
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const loggedIn = await isLoggedIn()

        console.log(loggedIn)
        if (!loggedIn) return

        console.log("A")

        const userId = await getCurrentlyLoggedInUserId()
        const res = await getDecryptedItemsOfUser(userId)
        if (!res) return

        console.log("A")

        setItems(res)

        console.log("A")
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

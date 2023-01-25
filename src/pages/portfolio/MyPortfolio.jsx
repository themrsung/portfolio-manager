import { useEffect, useState } from "react"
import { getCurrentlyLoggedInUserId, isLoggedIn } from "../../api/authApi"
import { store } from "../../redux/config"
import { getDecryptedItemsOfUser } from "../../api/itemsApi"
import PortfolioItemList from "../../components/portfolio/PortfolioItemList"
import { useSelector } from "react-redux"

export default function MyPortfolio() {
    const [items, setItems] = useState([])

    const passphrase = useSelector((state) => state.passphrase.passphrase)

    const fetchItems = async () => {
        const loggedIn = await isLoggedIn()

        console.log(loggedIn)
        if (!loggedIn) return

        const userId = await getCurrentlyLoggedInUserId()

        const res = await getDecryptedItemsOfUser(userId, passphrase)
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

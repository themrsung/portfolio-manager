import { useEffect, useState } from "react"
import { getCurrentlyLoggedInUserId, isLoggedIn } from "../../api/authApi"
import { store } from "../../redux/config"
import { getDecryptedItemsOfUser } from "../../api/itemsApi"
import PortfolioItemList from "../../components/portfolio/PortfolioItemList"
import { useDispatch, useSelector } from "react-redux"
import { setPassphrase } from "../../redux/reducers/passphraseReducer"

export default function MyPortfolio() {
    const dispatch = useDispatch()

    const [items, setItems] = useState([])

    const passphrase = useSelector((state) => state.passphrase.passphrase)

    const fetchItems = async () => {
        const loggedIn = await isLoggedIn()

        if (!loggedIn) return

        const userId = await getCurrentlyLoggedInUserId()

        const res = await getDecryptedItemsOfUser(userId, passphrase)
        if (!res) return

        setItems(res)
    }

    useEffect(() => {
        fetchItems()
    }, [passphrase])

    return (
        <>
            <div>
                <input
                    value={passphrase}
                    type="password"
                    onChange={(e) => {
                        dispatch(setPassphrase(e.target.value))
                    }}
                />
            </div>
            <PortfolioItemList decryptedItems={items} />
        </>
    )
}

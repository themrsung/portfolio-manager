import { useParams } from "react-router-dom"
import PortfolioItem from "../../components/portfolio/PortfolioItem"

export default function PortfolioItemDetails() {
    const params = useParams()
    console.log(params)

    const urlParams = new URLSearchParams(window.location.pathname)
    console.log(urlParams)

    return (
        <PortfolioItem
            decryptedItem={{
                id: 2,
                owner: "admin",
                name: "name",
                description: "desc",
                price: 3000
            }}
        />
    )
    // return <PortfolioItem decryptedItem={decryptedItem} />
}

import { useParams } from "react-router-dom"
import PortfolioItem from "../../components/portfolio/PortfolioItem"
import { useSearchParams } from "react-router-dom"

export default function PortfolioItemDetails() {
    const params = useParams()
    console.log(params)

    const [searchParams] = useSearchParams()
    console.log(searchParams)

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

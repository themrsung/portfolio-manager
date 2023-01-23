import PortfolioItem from "../../components/portfolio/PortfolioItem"

export default function PortfolioItemDetails({ decryptedItem }) {
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

import PortfolioItem from "./PortfolioItem"

export default function PortfolioItemList({ decryptedItems }) {
    return (
        <>
            {decryptedItems.map((i) => {
                return <PortfolioItem decryptedItem={i} />
            })}
        </>
    )
}

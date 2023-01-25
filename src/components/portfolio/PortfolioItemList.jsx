import PortfolioItem from "./PortfolioItem"

export default function PortfolioItemList({ decryptedItems }) {
    if (!decryptedItems || decryptedItems.length < 1) return <></>

    return (
        <>
            {decryptedItems.map((i) => {
                return <PortfolioItem decryptedItem={i} />
            })}
        </>
    )
}

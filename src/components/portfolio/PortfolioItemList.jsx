export default function PortfolioItemList({ decryptedItems }) {
    return (
        <>
            {decryptedItems.map((i) => {
                return (
                    <>
                        <h3>i.name</h3>
                        <p>i.description</p>
                    </>
                )
            })}
        </>
    )
}

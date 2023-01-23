export default function PortfolioItem({ decryptedItem }) {
    return (
        <>
            {decryptedItem.forEach((i) => {
                return (
                    <p>
                        {i}: {decryptedItem[i]}
                    </p>
                )
            })}
        </>
    )
}

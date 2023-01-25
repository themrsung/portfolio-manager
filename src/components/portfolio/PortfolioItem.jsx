import { useEffect, useState } from "react"

export default function PortfolioItem({ decryptedItem }) {
    return (
        <>
            {decryptedItem.map((prop) => {
                console.log(prop)
            })}
        </>
    )
}

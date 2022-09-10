import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Keywords } from "./Keywords"

export function FormToFind(props) {
    const { allOffers, setAllOffers } = props

    const [matchingOffers, setMatchingOffers] = useState([]) // all offers of the selected type
    const [baustoff, setBaustoff] = useState(null) // selected type of baustoff
    const [bought, setBought] = useState([]) // array of ids of accepted offers

    const buyBaustoff = id => {
        setBought(prevIds => {
            const newArray = [...prevIds, id]
            return newArray
        })
        setAllOffers(prevOffers => {
            const copy = [...prevOffers]
            const newAllOffers = copy.filter(offer => offer.id !== id)
            return newAllOffers
        })
    }

    // handles change of selected type of baustoff
    const handleChange = e => {
        const selectedBaustoff = e.target.value
        const copy = [...allOffers]
        const filteredOffers = copy.filter(offer => offer.type === selectedBaustoff)
        setMatchingOffers(filteredOffers)
        setBaustoff(selectedBaustoff)
    }

    const renderOffers = () => {
        if (!baustoff) return <p>Bitte wählen Sie einen Baustoff.</p>
        return matchingOffers.length === 0
            ? <p>Es gibt keine Angebote für {baustoff}.</p>
            : <>
                <h3>Alle Ergebnisse für {baustoff}:</h3>
                {matchingOffers.map(offer => (
                    <div className="offer" key={offer.id.toString()}>
                        <h4>Anbieter: {offer.offeredBy}</h4>
                        <p>Menge: {offer.amount} t</p>
                        <p>Preis: {offer.price} Eur</p>
                        <p>Gelagert in: {offer.storedIn}</p>
                        <button type="button" disabled={bought.includes(offer.id)} onClick={() => buyBaustoff(offer.id)}>Kaufen</button>
                        <p style={{ display: bought.includes(offer.id) ? "block" : "none" }}>Sie haben {baustoff} bei {offer.offeredBy} gekauft.</p>
                        <hr />
                    </div>
                ))}
            </>
    }

    return (
        <>
            <h2>Baustoffe finden</h2>
            <Keywords handleChange={handleChange} />
            {renderOffers()}
            <NavLink to={"/"}>
                <button type="button">Zurück</button>
            </NavLink>
        </>
    )
}
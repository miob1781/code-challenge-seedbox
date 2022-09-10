import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Keywords } from "./Keywords"

export function FormToOffer(props) {
    const { allOffers, setAllOffers } = props

    const [formData, setFormData] = useState({})
    const [offerCreated, setOfferCreated] = useState(false)

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setFormData(prevData => {
            return ({...prevData, [name]: value})
        })
    }

    const submitForm = e => {
        e.preventDefault()
        const copy = {...formData}
        const ids = allOffers.map(offer => offer.id)

        const newOffer = {
            id: Math.max(...ids) + 1,
            type: copy.type,
            offeredBy: copy.offeredBy,
            storedIn: copy.storedIn,
            amount: Number(copy.amount),
            price: Number(copy.price)
        }

        setAllOffers(prevOffers => [...prevOffers, newOffer])
        setOfferCreated(true)
        setFormData(prevData => {
            const emptyFormData = {}
            const keys = Object.keys(prevData)
            keys.forEach(key => emptyFormData[key] = null)
            return emptyFormData
        })

        e.target.reset()
    }

    return (
        <>
            <h2>Baustoffe anbieten</h2>
            <p>Bitte geben Sie die Daten für Ihr Angebot ein.</p>
            <form onSubmit={submitForm}>
                <Keywords handleChange={handleChange} />
                <br />
                <label htmlFor="offeredBy">Firma: </label>
                <input
                    type="text"
                    id="offeredBy"
                    name="offeredBy"
                    onChange={handleChange}
                    />
                <br />
                <label htmlFor="storedIn">Lagerort: </label>
                <input
                    type="text"
                    id="storedIn"
                    name="storedIn"
                    onChange={handleChange}
                    />
                <br />
                <label htmlFor="amount">Menge (in Tonnen): </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    onChange={handleChange}
                    />
                <br />
                <label htmlFor="price">Preis (in Eur): </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    />
                <br />
                <button>Absenden</button>
            </form>
            <p style={{display: offerCreated ? "block" : "none"}}>Sie haben ein neues Angebot erstellt.</p>
            <NavLink to={"/"}>
                <button type="button">Zurück</button>
            </NavLink>
        </>
    )
}
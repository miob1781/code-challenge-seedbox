import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Keywords } from "./Keywords"

export function FormToOffer(props) {
    const { allOffers, setAllOffers } = props

    const [formData, setFormData] = useState({})
    const [offerCreated, setOfferCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setFormData(prevData => {
            return ({...prevData, [name]: value})
        })
    }

    const submitForm = e => {
        e.preventDefault()

        if (!formData.type) {
            setErrorMessage("Bitte wählen Sie einen Baustoff.")
            setOfferCreated(false)
            return
        }

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
        setErrorMessage("")
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
                    required
                    />
                <br />
                <label htmlFor="storedIn">Lagerort: </label>
                <input
                    type="text"
                    id="storedIn"
                    name="storedIn"
                    onChange={handleChange}
                    required
                    />
                <br />
                <label htmlFor="amount">Menge (in Tonnen): </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    onChange={handleChange}
                    required
                    />
                <br />
                <label htmlFor="price">Preis (in Eur): </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    required
                    />
                <br />
                <button>Absenden</button>
            </form>
            <p>{errorMessage}</p>
            <p style={{display: offerCreated ? "block" : "none"}}>Sie haben ein neues Angebot erstellt.</p>
            <NavLink to={"/"}>
                <button type="button">Zurück</button>
            </NavLink>
        </>
    )
}
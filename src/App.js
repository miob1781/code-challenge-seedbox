import './App.css';
import offersJson from "./offers.json"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { FormToFind } from "./components/FormToFind"
import { FormToOffer } from "./components/FormToOffer"

function App() {
    const [allOffers, setAllOffers] = useState(offersJson)
    const [bought, setBought] = useState([])

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

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    path="/baustoffe-finden"
                    element={<FormToFind allOffers={allOffers} buyBaustoff={buyBaustoff} bought={bought} setBought={setBought} />} />
                <Route
                    path="/baustoffe-anbieten"
                    element={<FormToOffer setAllOffers={setAllOffers} />} />
            </Routes>
        </div>
    );
}

export default App;

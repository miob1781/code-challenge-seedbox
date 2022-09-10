import './App.css';
import offersJson from "./offers.json"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { FormToFind } from "./components/FormToFind"
import { FormToOffer } from "./components/FormToOffer"

function App() {
    const [allOffers, setAllOffers] = useState(offersJson)

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    path="/baustoffe-finden"
                    element={<FormToFind allOffers={allOffers} setAllOffers={setAllOffers} />} />
                <Route
                    path="/baustoffe-anbieten"
                    element={<FormToOffer allOffers={allOffers} setAllOffers={setAllOffers} />} />
            </Routes>
        </div>
    );
}

export default App;

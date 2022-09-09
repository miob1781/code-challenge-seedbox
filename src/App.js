import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { FormToFind } from "./components/FormToFind"
import { FormToOffer } from "./components/FormToOffer"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/baustoffe-finden" element={<FormToFind />} />
                <Route path="/baustoffe-anbieten" element={<FormToOffer />} />
            </Routes>
        </div>
    );
}

export default App;

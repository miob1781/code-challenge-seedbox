import { NavLink } from "react-router-dom"

export function Home(props){
    return (
        <>
            <header>
                <h1>Herzlich Willkommen bei Baustofffinder!</h1>
                <p>Sie haben überschüssige Baustoffe, die Ihre Lager verstopfen? Oder Sie brauchen dringend Baustoffe? Bei Baustofffinder können Sie Abnehmer oder Zulieferer für Ihre Waren finden!</p>
            </header>
            
            <div className="buttons">
                <NavLink to="/baustoffe-finden">
                    <button type="button">Baustoffe finden</button>
                </NavLink>
                <NavLink to="/baustoffe-anbieten">
                    <button type="button">Baustoffe anbieten</button>
                </NavLink>
            </div>
        </>
    )
}
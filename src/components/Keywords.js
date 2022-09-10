export function Keywords(props) {
    const { handleChange } = props

    return (
        <>
            <label htmlFor="baustoff">Baustoff: </label>
            <select name="type" id="baustoff" onChange={ handleChange }>
                <option value="">--Bitte Baustoff wählen--</option>
                <option value="Zement">Zement</option>
                <option value="Ziegelsteine">Ziegelsteine</option>
                <option value="Dachziegel">Dachziegel</option>
                <option value="Bauholz">Bauholz</option>
                <option value="Stahlträger">Stahlträger</option>
            </select>
        </>
    )
}
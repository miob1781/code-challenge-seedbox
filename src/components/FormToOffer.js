export function FormToOffer(props){
    const submitForm = e => {
        e.preventDefault()
    }

    return (
        <>
            <h2>Baustoffe anbieten</h2>
            <form onSubmit={submitForm}>

            </form>
        </>
    )
}
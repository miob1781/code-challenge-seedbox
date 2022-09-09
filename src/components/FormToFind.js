export function FormToFind(props){
    const submitForm = e => {
        e.preventDefault()
    }

    return (
        <>
            <h2>Baustoffe finden</h2>
            <form onSubmit={submitForm}>

            </form>
        </>
    )
}
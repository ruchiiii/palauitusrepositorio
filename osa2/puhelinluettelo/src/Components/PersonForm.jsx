const PersonForm = ({ newName, newNumber, onNewNameChange, onNewNumberChange, onSubmit }) => {

    return (
        <form>

            <div>
                name:
                <input placeholder="name" type="text" value={newName} onChange={onNewNameChange} />
            </div>
            <div>
                <div>
                    number:
                    <input placeholder="number" type="text" value={newNumber} onChange={onNewNumberChange} />
                </div>
                <div></div>
                <button onClick={onSubmit} type="submit">add</button>
            </div>
        </form>
    )
}



export default PersonForm
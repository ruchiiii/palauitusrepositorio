
const Persons = ({ filteredPersons }) => {

    return (

        <ul>
            {filteredPersons.map(person => <li key={person.number} > {person.name}  {person.number} </li>)}
        </ul>



    )
}

export default Persons
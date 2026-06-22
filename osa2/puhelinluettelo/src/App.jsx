import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './Components/Persons.jsx'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios.get('http://localhost:3001/persons').then(reponse => {

      setPersons(reponse.data)
    })
  }

  useEffect(hook, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons([...persons, { name: newName, number: newNumber }])
    setNewName('')
    setNewNumber('')
  }

  const onNewNameChange = (e) => {
    setNewName(e.target.value)

  }

  const onNewNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} onNewNameChange={onNewNameChange} onNewNumberChange={onNewNumberChange} onSubmit={onSubmit} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />


    </div>
  )

}

export default App
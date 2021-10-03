import React, {useState} from 'react'

const Form = ({sendData}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addDetails = (event) => {
    event.preventDefault()
    sendData(newName, newNumber)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addDetails}>
        <label>Name <input value={newName} onChange={handleNameChange}></input></label>
        <br />
        <label>Number <input value={newNumber} onChange={handleNumberChange}></input></label>
        <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form

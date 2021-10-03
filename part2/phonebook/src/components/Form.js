import React, {useState} from 'react'

const Form = ({sendData}) => {
  const [newName, setNewName] = useState('')
  
  const addDetails = (event) => {
    event.preventDefault()
    sendData({name: newName})
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addDetails}>
        <label>Name <input value={newName} onChange={handleChange}></input></label>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form

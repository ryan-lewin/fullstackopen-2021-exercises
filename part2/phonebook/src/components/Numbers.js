import React from "react"

const Numbers = ({people, filter, sendDeleteData}) => {
  const filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(filter.toLowerCase())
  })

  const handleDelete = event => {
    sendDeleteData(event.target.value)
  }

  return (
    <div>
      <ul>
        {filteredPeople.map(person => <li key={person.id}>
          {person.name} | {person.number} 
          <button value={person.id} onClick={handleDelete}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default Numbers

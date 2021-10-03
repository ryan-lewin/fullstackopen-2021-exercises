import React from "react"

const Numbers = ({people, filter}) => {
  const filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div>
      <ul>
        {filteredPeople.map(person => <li key={person.id}>{person.name} | {person.number}</li>)}
      </ul>
    </div>
  )
}

export default Numbers

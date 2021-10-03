import React from 'react'

const Numbers = ({people}) => {
  return (
    <div>
      <ul>
        {people.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default Numbers

import React from 'react'

const Anecdote = ({votes, text}) => {
  return (
    <div>
      <p>{text}</p>
      <p>Has {votes} votes</p>
    </div>
  )
}

export default Anecdote

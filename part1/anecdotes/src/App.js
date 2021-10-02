import React, {useState} from 'react'
import Anecdote from './components/Anecdote'
import Button from './components/Button'

const App = () => {
  const [anectdotes, setAnecdotes] = useState([
    {votes: 0, text: 'If it hurts, do it more often'},
    {votes: 0, text: 'Adding manpower to a late software project makes it later!'},
    {votes: 0, text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'},
    {votes: 0, text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
    {votes: 0, text: 'Premature optimization is the root of all evil.'},
    {votes: 0, text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'},
    {votes: 0, text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'},
  ])
  const [selected, setSelected] = useState(0)

  const [popular, setPopular] = useState({})

  const changeAnecdote = () => setSelected(Math.floor(Math.random() * (anectdotes.length - 1)))

  const voteForAnecdote = () => {
    const newAnecdotes = [...anectdotes]
    newAnecdotes[selected].votes += 1
    setAnecdotes(newAnecdotes)
    setPopular(findMostPopularAnecdote)
  }

  const findMostPopularAnecdote = () => anectdotes.reduce((max, anecdote) => max.votes > anecdote.votes ? max: anecdote)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote votes={anectdotes[selected].votes} text={anectdotes[selected].text}/>
      <Button onClick={voteForAnecdote} text='vote' />
      <Button onClick={changeAnecdote} text='Change Anecdote'/>
      <h2>Anecdote with the most votes</h2>
      <Anecdote votes={popular.votes || 0} text={popular.text || 'No votes have been cast'} />
    </div>
  );
}

export default App;

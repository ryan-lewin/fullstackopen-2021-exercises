import React from 'react'
import { useState} from 'react/cjs/react.development'

const Search = ({sendFilter}) => {
  const [filter, setFilter] = useState('')

  const handleFilterChange = event => {
    setFilter(event.target.value)
    sendFilter(event.target.value)
  }

  return (
    <form>
      <label>Filter by <input value={filter} onChange={handleFilterChange}></input></label>
    </form>
  )
}

export default Search

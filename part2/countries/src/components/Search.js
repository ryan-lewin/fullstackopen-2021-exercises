
const Search = ({searchTerm, sendSearchTerm}) => {
  const handleSearchTermChange = event => sendSearchTerm(event.target.value)

  return (
    <form>
      <label>
        Find Countries <input onChange={handleSearchTermChange} value={searchTerm}></input>
      </label>
    </form>
  )
}

export default Search

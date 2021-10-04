import React from 'react'

const Results = ({countries, sendSelectedCountry}) => {

  const handleClick = event => {
    event.preventDefault()
    sendSelectedCountry(event.target.value)
  }

  return (
    <div>
      <ul>
        {countries.map(country => <li key={country.cca2}>
          {country.name.common}
          <button onClick={handleClick} value={country.cca2}>Select</button>
          </li>)}
      </ul>
    </div>
  )
}

export default Results

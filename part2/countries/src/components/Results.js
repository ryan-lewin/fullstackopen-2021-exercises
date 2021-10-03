import React from 'react'

const Results = ({countries}) => {
  return (
    <div>
      <ul>
        {countries.map(country => <li key={country.cca2}>{country.name.common}</li>)}
      </ul>
    </div>
  )
}

export default Results

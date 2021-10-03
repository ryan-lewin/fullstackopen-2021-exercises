import React from 'react'

const Country = ({countries}) => {

  if(countries.length === 1){
    if(countries[0].cca2 !== 'error') {
      const country = countries[0]
      return (
        <div>
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h4>Languages</h4>
          <ul>
            {Object.entries(country.languages).map(([key, value]) => {
              return <li key={key}>{value}</li>
            })}
          </ul>
          <img alt={`${country.name.common} flag`} src={country.flags.png} />
        </div>
      )
    } else { return (<> </>) }
  } else { return (<> </>) }

}

export default Country

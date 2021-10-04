import React from 'react'

const Country = ({country}) => {

  return country.length === 1
    ?   
      <div>
        <h3>{country[0].name.common}</h3>
        <p>Capital: {country[0].capital}</p>
        <p>Population: {country[0].population}</p>
        <h4>Languages</h4>
        <ul>
          {Object.entries(country[0].languages).map(([key, value]) => {
            return <li key={key}>{value}</li>
          })}
        </ul>
        <img alt={`${country[0].name.common} flag`} src={country[0].flags.png} />
      </div>
    : <> </>
}

export default Country

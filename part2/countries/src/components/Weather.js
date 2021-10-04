import React from 'react'

const Weather = ({weather}) => {
  return (
    Object.keys(weather).length != 0
    ?
      <div>
        <h3>Weather in {weather.location.name}</h3>
        <p>Temperature: {weather.current.temperature} celsius</p>
        <p>Wind: {weather.current.wind_speed} SSW</p>
      </div>
    : <> tes</>
  )
}

export default Weather

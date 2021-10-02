import React from 'react'
import SingleStatistic from './SingleStatistic'

const Statistics = ({goodValue, neutralValue, badValue, totalValue}) => {

  const averageValue = goodValue - badValue || 0
  const positiveValue = goodValue * 100 / totalValue || 0

  return (
    <div>
      <h2>Statistics</h2>  
      <SingleStatistic value={goodValue} text='Good'/>
      <SingleStatistic value={neutralValue} text='Neutral'/>
      <SingleStatistic value={badValue} text='Bad'/>
      <SingleStatistic value={totalValue} text='Total'/>
      <SingleStatistic value={averageValue} text='Average'/>
      <SingleStatistic value={positiveValue} text='Positive'/>
    </div>
  )
}

export default Statistics
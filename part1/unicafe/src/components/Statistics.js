import React from 'react'
import SingleStatistic from './SingleStatistic'

const Statistics = ({goodValue, neutralValue, badValue, totalValue}) => {
  return (
    <div>
      <h2>Statistics</h2>  
      <SingleStatistic value={goodValue} text='Good'/>
      <SingleStatistic value={neutralValue} text='Neutral'/>
      <SingleStatistic value={badValue} text='Bad'/>
      <SingleStatistic value={totalValue} text='Total'/>
    </div>
  )
}

export default Statistics

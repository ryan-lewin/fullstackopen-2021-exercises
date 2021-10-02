import React from 'react'

const SingleStatistic = ({value, text}) => {
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

export default SingleStatistic

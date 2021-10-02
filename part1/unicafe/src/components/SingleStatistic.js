import React from 'react'

const SingleStatistic = ({value, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default SingleStatistic

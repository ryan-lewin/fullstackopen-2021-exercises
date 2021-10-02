import React from 'react'

const Button = ({onclick, text}) => {
  return (
    <div>
      <button onClick={onclick}>{text}</button>
    </div>
  )
}

export default Button

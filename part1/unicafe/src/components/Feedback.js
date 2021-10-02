import React from 'react'
import Button from './Button'

const Feedback = ({setValues}) => {
  return (
    <div>
      <h2>Give Feedback</h2>
      <div style={{display: 'flex'}}>
        <Button onclick={setValues[0]} text='Good'/>
        <Button onclick={setValues[1]} text='Neutral'/>
        <Button onclick={setValues[2]} text='Bad'/>
      </div>
    </div>
  )
}

export default Feedback

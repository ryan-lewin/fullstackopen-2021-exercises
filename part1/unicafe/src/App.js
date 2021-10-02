import React, {useState} from "react";
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

function App() {
  // State value for storing cm ratings
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
    setTotal(total + 1) 
  }

  return (
    <div>
      <Feedback setValues={[incrementGood, incrementNeutral, incrementBad]}/>
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} totalValue={total}/>
    </div>
  );
}

export default App;

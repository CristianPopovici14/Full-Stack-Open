import { useState } from 'react'

const Feedback = ({ addGood, addNeutral, addBad }) => {
  return (
    <div>
      <h1>Rate us</h1>
      <button onClick={addGood}>Good</button>
      <button onClick={addNeutral}>Neutral</button>
      <button onClick={addBad}>Bad</button>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good rates: {good}</p>
      <p>Medium rates: {neutral}</p>
      <p>Bad rates: {bad}</p>
      <p>All rates: {good + neutral + bad}</p>
      <p>Average: {(good*1 + neutral*0 + bad*(-1))/(good + neutral + bad)}</p>
      <p>Positive feedbacks: {(good/(good + neutral + bad))*100}% </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Feedback addGood={addGood} addNeutral={addNeutral} addBad={addBad} />
      {(good + neutral + bad) == 0 ? <p>No feedback given</p>: <Statistics good={good} neutral={neutral} bad={bad} /> }
    </>
  )
}

export default App
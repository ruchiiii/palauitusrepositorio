import { useState } from 'react'

const StatisticsLine = ({ text, value }) => {

  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr> 
   
  ) 
}

const Statistics = ({ good, neutral, bad }) => {
  
  const average = ((good - bad) / (good + neutral + bad)) || 0
  const positive = ((good / (good + neutral + bad)) * 100) || 0

  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good + neutral + bad} />
          <StatisticsLine text="average" value={average.toFixed(1)} />
          <StatisticsLine text="positive" value={`${positive.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>  
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
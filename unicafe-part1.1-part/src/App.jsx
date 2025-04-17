import { useState } from "react";

const Statisitcs = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const avg = () => {
    if (total === 0) return 0;
    return (good - bad) / total;
  };

  const positive = total == 0 ? 0 : (good / total) * 100;
  if (total != 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {avg()}</p>
        <p>positive {positive} %</p>
      </>
    );
  } 
  return (
    <>
    <p>No feedback given</p>
    </>
  )
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statisitcs good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;

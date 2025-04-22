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
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={avg()} />
        <StatisticLine text="positive" value={positive} />
      </>
    );
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text === "positive" ? (
        <p>
          {text} {value} %
        </p>
      ) : (
        <p>
          {text} {value}
        </p>
      )}
    </>
  );
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

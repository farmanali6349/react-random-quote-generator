import React, {useState} from 'react';
import './App.css';

const quotes = [
  "Do not let your difficulties fill you with anxiety.",
  "The best revenge is to improve yourself.",
  "Patience is the fruit of faith.",
  "The tongue is like a lion.",
  "Do not be a slave to others when Allah has created you free.",
  "The best deed of a great man is to forgive and forget.",
  "The strongest amongst you is the one who controls his anger.",
  "A moment of patience in a moment of anger saves you a hundred moments of regret.",
  "Knowledge without action is insanity, and action without knowledge is vanity.",
  "A wise man first thinks and then speaks."
];

function App() {
  const [quote, setQuote] = useState(quotes[0])
  return (
    <div>
      <h1>RANDOM QUOTES</h1>
      <p>{quote}</p>
      <button onClick={randomize}>GENRATE</button>
    </div>
  );

  function randomize() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }
}

export default App;

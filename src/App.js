import './App.css';
import React, { useState } from 'react';
import NumberSquare from './components/NumberSquare';


const App = () => {

  const [size, setSize] = useState();
  const [array, setArray] = useState([]);
  const [status, setStatus] = useState(false);


  const generatePrimes = (n) => {
    let a = [],
      counter = 0;

    for (let i = 0; i <= n; i++) a.push(true);

    a[0] = false;
    a[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (a[i] === true) {
        counter = 0;
        for (let j = i * i; j <= n; j = (i * i) + (counter * i)) {
          a[j] = false;
          counter++;
        }
      }
    }

    return a;
  };

  const start = () => {
    if (typeof parseInt(size) === 'number') {
      let primes = generatePrimes(size);
      setArray(primes);
      setStatus(true);
    }
  }

  const reset = () => {
    setStatus(false);
    setSize("");
  }

  return (
    <div className="App">
      <div className="headers">
        The Sieve of Eratosthenes Prime Number Generator
      </div>
      {/* <div className="date">9/17/2021</div> */}
      <div className="inputs">
        <input type="text" className="input_box" value={size} onChange={e => setSize(e.target.value)} placeholder="Limit (n)" />
        <button className="generate_button" onClick={start}>Generate</button>
        <button className="reset_button" onClick={reset}>Reset</button>
      </div>
      <div className="container">

        {status && <div className="body">
          {array.map((value, index) => {
            return (<NumberSquare number={index} prime={value} />)
          })}
        </div>}
      </div>
      {!status &&
        <div className="description">
          Enter natural number <i>n</i> into the textbox and click Generate! This will compute all the prime numbers up to <i>n</i>. WARNING: <i>n</i> > 300,000 may crash the site.
          <br />
          <br />
          During my Number Theory course in college, we learned about The Sieve of Eratosthenes. Although simple, I still found this ancient method of computing prime numbers
          to be a pretty fascinating algorithm. It works by going down the line of numbers, stopping at each, and sending out a second pointer to eliminate all of the multiples of the selected number.
          <br />
          <br />
          A more formal definition can be found <a href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes">here</a>. Thought it would be fun to code up this quick visualization of the results. I was never the best at math courses, let alone a proof-based math course, but Number Theory was quite memorable and interesting. Shoutout to Professor Luis for being amazing! Even if I don't remember everything from this course in the future, I will at least have this project to look back on :)

          <br />
          <br />
          ~Tyler
          <br />
          <br />
          <br />
          Sept. 2021
        </div>}


    </div>
  );
}

export default App;

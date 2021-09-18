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
  }

  return (
    <div className="App">
      <div className="headers">
        The Sieve of Eratosthenes Prime Number Generator
      </div>
      {/* <div className="date">9/17/2021</div> */}
      <div className="inputs">
        <input type="text" className="input_box" value={size} onChange={e => setSize(e.target.value)} placeholder="Limit(n)" />
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
          Enter <i>n</i> into the textbox and click Generate! This will compute all the prime numbers up to <i>n</i>. WARNING: <i>n</i> > 90,000 will crash the site.
          <br />
          <br />
          How The Algorithm Works:
          <br />
          <br />
          During my Number Theory course in college, we learned about The Sieve of Eratosthenes. Although simple, I still found this ancient method of computing prime numbers
          to be a pretty fascinating algorithm. The main idea is that if we start with a set of all positive integers between 1 and any limit <i>n</i>, then we eliminate all composite numbers up to <i>n</i>, everything that is left must be prime.
          <br />
          <br />
          The algorithm starts by pointing to the first number, let's say 2. A second pointer would then start iterating through all the multiples of 2 and crossing them off since any multiple would be considered composite. This process then happens for 3. However, once it gets to 4, it would've already been crossed off as composite since when the algorithm ran for 2, 4 was detected as a mutiple of 2. So, the pointer then skips to 5. The process keeps going until we hit <i>n</i>. Notice that the algorithm gets progressively faster since more numbers are getting eliminated.

          <br />
          <br />
          If you would like a way better explanation, you can read about it <a href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes">here.</a> Thought it would be fun to code up this little simulation of the algorithm. I was never the best at math, let alone a proof-based math course, but Number Theory was quite memorable and interesting. Even if I forget everything in the future, I will at least have this project to look back on :)

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

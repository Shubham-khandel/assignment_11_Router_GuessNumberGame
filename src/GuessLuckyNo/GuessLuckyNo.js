import React, { useState } from 'react';
import style from './GuessLuckyNo.module.css'

function GuessNumberGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function checkGuess () {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 10) {
      setMessage('Please enter a valid number between 1 and 10.');
    } else if (num < luckyNumber) {
      setMessage(`You guessed ${num}. That's a smaller number.`);
    } else if (num > luckyNumber) {
      setMessage(`You guessed ${num}. That's a bigger number.`);
    } else {
      setMessage(`Congratulations! You guessed the right number in ${attempts} attempts.`);
    }
  };

  function handleGuessChange(e){
    setGuess(e.target.value);
  };

  function handleGuessSubmit(e){
    e.preventDefault();
    checkGuess();
    setGuess('');
    setAttempts(attempts + 1);
  };

  return (
    <div className={style.gameContainer}>
      <h1>Guess the Lucky Number</h1>
      <form onSubmit={handleGuessSubmit}>
        <label>
          Enter your guess (between 1 and 10):
          <input placeholder='Guess Lucky Number' className={style.gameInput} type="text" value={guess} onChange={handleGuessChange} />
        </label>
        <button className={style.gameButton} type="submit">Match Number</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GuessNumberGame;

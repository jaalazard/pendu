import { useState } from "react";
import "./App.css";

function App() {
  let wordToGuess = "zoro";

  const blanks = "_".repeat(wordToGuess.length);
  const [count, setCount] = useState(10);
  const [userLetter, setUserLetter] = useState();
  const [guessedWord, setGuessedWord] = useState(blanks);
  const [badLetters, setBadLetters] = useState([]);

  const checking = (wordToGuess, userLetter) => {
    if (wordToGuess.includes(userLetter)) {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === userLetter) {
         setGuessedWord((prev) => {
          let newWord = prev.split('');
          newWord[i] = userLetter;
          return newWord.join('');
         }); 
      } 
    } 
  } else {
        badLetters.push(userLetter);      
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    setUserLetter(userInput[0] ?? "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count-1);
    checking(wordToGuess, userLetter);
    const input = document.querySelector('input');
    input.value='';
    if (guessedWord === wordToGuess) {
      alert("Gagné!"); }
  };

  return (
    <div id="container">
      <div id="tries">
      {guessedWord === wordToGuess ? <p> Gagné !</p> :
      guessedWord !== wordToGuess && count > 0? 
      <p>Essais restants : {count}</p> : 
      <p>Perdu !</p> }
    </div>
    <div id="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput">Entrez une lettre : </label>
        <input id="userInput" onChange={handleChange}></input>
        <button>Valider</button>
      </form>
      </div>
      <div id="guessedWordDisplay">
      {guessedWord.split('').map((element, index) => (
      <span className="span" key={index}>{element}</span>))}
      </div>
      <div id="badLetters">
      <p>Tentatives précédentes : {badLetters.join(', ')}</p>
      </div>
    </div>
  );
}



export default App;

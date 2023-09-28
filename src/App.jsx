import { useState } from "react";
import "./App.css";

function App() {
  let wordToGuess = "zoro";

  const [blanks, setBlanks] = useState("_".repeat(wordToGuess.length));
  const [count, setCount] = useState(10);
  const [userLetter, setUserLetter] = useState();

  const checking = (wordToGuess, userLetter) => {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === userLetter) {
          setBlanks(blanks.replace(blanks[i], userLetter));
      }
    }
    setCount(count-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = document.querySelector("#userInput");
    setUserLetter(userInput.value);
    if (wordToGuess.includes(userLetter) && count > 0) {
    checking(wordToGuess, userLetter);
    }
    if (blanks === wordToGuess) {
      alert("Gagné!");
    }
    userInput.value="";
  };

  return (
    <>
    {count > 0 ?
    <p>Essais restants : {count}</p>
    : <p>Perdu !</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput">Entrez une lettre : </label>
        <input id="userInput"></input>
        <button>Valider</button>
      </form>
      <p>{blanks}</p>
    </>
  );
}

export default App;

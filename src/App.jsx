import { useState } from "react";
import "./App.css";

function App() {
  let wordToGuess = "zoro";

  const [blanks, setBlanks] = useState("_".repeat(wordToGuess.length));
  const [count, setCount] = useState(11);
  const [userLetter, setUserLetter] = useState();

  const checking = (wordToGuess, userLetter) => {
    if (wordToGuess.includes(userLetter)) {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === userLetter) {
          setBlanks(blanks.replace(blanks[i], userLetter));
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = document.querySelector("#userInput");
    setUserLetter(userInput.value);
    checking(wordToGuess, userLetter);
    if (blanks === wordToGuess) {
      alert("Gagné!");
    }
    setCount(count - 1);
    if (count <= 0) {
      alert("Perdu !");
    }
    userInput.value="";
  };

  return (
    <>
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

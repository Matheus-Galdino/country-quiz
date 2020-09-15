import React, { useState, useEffect } from "react";
import "./css/App.css";
import Rest from "./RestCountries";

//Components
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const letters = ["", "A", "B", "C", "D"];
  const [gridIndexes, setgridIndexes] = useState([2, 1, 3, 4]);
  const [countries, setCountries] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);
  const [hasChoosed, setHasChoosed] = useState(false);
  const [isFlagQuestion, setIsFlagQuestion] = useState(false);
  const [hasMissed, setHasMissed] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      const data = await Rest.getAllCountries();
      setCountries(data);
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getCountriesIndexes = () => {
      setIndexes([]);
      for (let i = 0; i < 4; i++) {
        setIndexes((indexesArray) => [
          ...indexesArray,
          Math.floor(Math.random() * 250),
        ]);
      }
    };

    const randomizeOptionsIndexes = () => {
      setgridIndexes([1, 3, 4, 2]);
      setgridIndexes((old) => old.sort((a, b) => 0.5 - Math.random()));
    };

    getCountriesIndexes();
    randomizeOptionsIndexes();
    setIsFlagQuestion(Math.random() > 0.5);
  }, [counter]);

  return (
    <div className="App">
      {!hasMissed && gridIndexes && (
        <Question
          countries={[
            {
              correct: true,
              gridIndex: gridIndexes[0],
              country: countries[indexes[0]],
              letter: letters[gridIndexes[0]],
            },
            {
              correct: false,
              gridIndex: gridIndexes[1],
              country: countries[indexes[1]],
              letter: letters[gridIndexes[1]],
            },
            {
              correct: false,
              gridIndex: gridIndexes[2],
              country: countries[indexes[2]],
              letter: letters[gridIndexes[2]],
            },
            {
              correct: false,
              gridIndex: gridIndexes[3],
              country: countries[indexes[3]],
              letter: letters[gridIndexes[3]],
            },
          ]}
          counter={counter}
          setCounter={setCounter}
          hasChoosed={hasChoosed}
          setHasChoosed={setHasChoosed}
          isFlagQuestion={isFlagQuestion}
          setHasMissed={setHasMissed}
        />
      )}
      {hasMissed && (
        <Result
          counter={counter}
          setCounter={setCounter}
          setHasMissed={setHasMissed}
          setHasChoosed={setHasChoosed}
        />
      )}

      <footer>Matheus Carvalho @devChallenges.io</footer>
    </div>
  );
}

export default App;

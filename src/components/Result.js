import React from "react";
import winner from "../images/winner.svg";
import "../css/result.css";

const Result = ({ counter, setCounter, setHasMissed, setHasChoosed }) => {
  const tryAgain = () => {
    setCounter(0);
    setHasMissed(false);
    setHasChoosed(false);
  };

  return (
    <div className="container">
      <div className="container-header">
        <h1>Country quiz</h1>
      </div>
      <div className="container-content result-container">
        <img src={winner} alt="Winner" />

        <p className="result-title">Results</p>

        <p className="result-paragraph">
          You got <span className="counter">{counter <= 0 ? 0 : counter}</span>{" "}
          correct answers
        </p>

        <button className="try-again-button" onClick={tryAgain}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default Result;

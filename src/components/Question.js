import React, { useState } from "react";
import adventure from "../images/adventure.svg";
import "../css/question.css";

//components
import Alternative from "./Alternative";

const Question = ({
  counter,
  setCounter,
  countries,
  hasChoosed,
  setHasChoosed,
  isFlagQuestion,
  setHasMissed,
}) => {
  const [isCorrect, setIsCorrect] = useState(null);

  const next = () => {
    if (isCorrect) {
      setCounter((counter) => counter + 1);
      setHasChoosed(false);
    } else {
      setHasMissed(true);
      if (counter === 0) setCounter(-1);
    }
  };

  return (
    <div className="container">
      <div className="container-header">
        <h1>Country quiz</h1>
        <img src={adventure} alt="adventure" />
      </div>
      {countries[0].country && (
        <div className="container-content">
          {isFlagQuestion && (
            <div>
              <img
                src={countries[0].country.flag}
                alt="country flag"
                className="question-flag"
              />
              <p className="question-title">
                Which country does this flag belong to?
              </p>
            </div>
          )}
          {!isFlagQuestion && (
            <p className="question-title">
              {countries[0].country.capital} is the capital of
            </p>
          )}

          <div className="alternative-container">
            {countries.map((item) => (
              <Alternative
                key={item.index}
                country={item}
                setIscorrect={setIsCorrect}
                hasChoosed={hasChoosed}
                setHasChoosed={setHasChoosed}
              />
            ))}
          </div>
          <button
            className={`next-button ${hasChoosed ? "show" : ""}`}
            onClick={next}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;

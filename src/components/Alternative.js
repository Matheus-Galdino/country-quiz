import React, { useState } from "react";
import "../css/alternative.css";

const Alternative = ({ country, setIscorrect, hasChoosed, setHasChoosed }) => {
  const [isElementSelected, setIsElementSelected] = useState(null);

  const pickAlternative = (e) => {
    if (hasChoosed !== true) {
      setHasChoosed(true);
      setIsElementSelected(true);
      setIscorrect(country.correct);
    }
  };

  return (
    <>
      <button
        className={`alternative ${
          hasChoosed && isElementSelected
            ? country.correct
              ? "correct"
              : "wrong"
            : ""
        } ${hasChoosed ? (country.correct ? "correct" : "") : ""}`}
        onClick={pickAlternative}
        style={{ gridRow: `${country.gridIndex}` }}
      >
        <h2 translate="no">{country.letter}</h2>
        <p>{country.country.name}</p>
        <span className="material-icons cancel-icon" translate="no">cancel</span>
        <span className="material-icons check-icon" translate="no">check</span>
      </button>
    </>
  );
};

export default Alternative;

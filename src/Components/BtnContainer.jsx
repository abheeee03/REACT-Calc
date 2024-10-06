import React from "react";
import Styles from "./BtnContainer.module.css";

const BtnContainer = ({ onbtnClick }) => {
  const btns = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "Ans",
  ];

  return (
    <div className={Styles.Container}>
      {btns.map((btnName, key) => (
        <button
          key={key}
          className={Styles.btns}
          onClick={() => onbtnClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;

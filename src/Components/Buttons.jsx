import React from "react";
import Styles from "./Buttons.module.css";

const List = ({ getbtn }) => {
  let btns = [
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
    <div className={Styles.btnCont}>
      {btns.map((btnName, key) => (
        <button
          key={key}
          className={`btn btn-light`}
          onClick={() => getbtn(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default List;

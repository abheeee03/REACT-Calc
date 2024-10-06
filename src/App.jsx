import React, { useState } from "react";
import Display from "./Components/Display";
import BtnContainer from "./Components/BtnContainer";
import Styles from "./App.module.css";

const App = () => {
  const [Number, setNumber] = useState("");
  const onbtnClick = (btnName) => {
    if (btnName == "C") {
      setNumber("");
    } else if (btnName == "Ans") {
      const res = eval(Number);
      setNumber(res);
    } else {
      const newDisplayValue = Number + btnName;
      setNumber(newDisplayValue);
    }
  };
  return (
    <>
      <h1 className={Styles.head}>Calculator</h1>
      <div className={Styles.Cont}>
        <Display Number={Number} />
        <BtnContainer onbtnClick={onbtnClick} />
      </div>
    </>
  );
};

export default App;

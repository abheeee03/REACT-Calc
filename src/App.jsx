import React, { useState } from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import Styles from "./App.module.css";

const App = () => {
  const [CalcValue, setCalcValue] = useState([""]);
  const getbtn = (btnName) => {
    if (btnName == "C") {
      setCalcValue([""]);
    } else if (btnName == "Ans") {
      const result = eval(CalcValue);
      setCalcValue(result);
    } else {
      const newValue = CalcValue + btnName;
      setCalcValue(newValue);
    }
  };
  return (
    <div className={Styles.Container}>
      <h1>CALCULATOR</h1>
      <Display value={CalcValue} />
      <Buttons getbtn={getbtn} />
    </div>
  );
};

export default App;

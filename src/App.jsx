import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import { numberButtons, operatorButtons } from "./utils/constants";
import "./styles/button.css";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState("");

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }
  function equalHandler() {
    if (todoOp == "+") {
      const result = Number(prevScreen) + Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp == "-") {
      const result = Number(prevScreen) - Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp == "*") {
      const result = Number(prevScreen) * Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp == "/") {
      const result = Number(prevScreen) / Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    // if (todoOp == "%") {
    //   const result = (Number(prevScreen) * Number(currentScreen)) / 100 + "";
    //   setCurrentScreen(result);
    // }
    // if (todoOp == "+/-") {
    //   const result = Number(prevScreen) * -1 + "";
    //   setCurrentScreen(result);
    // }
    // console.log(todoOp);

    // if (todoOp == "AC") {
    //   console.log(todoOp);
    //   const result = "";
    //   setCurrentScreen(" ");
    // }
  }
  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
    acHandler(val);
    plusMinusHandler(val);
    percHandler(val);
    console.log(val);
  }

  function acHandler(event) {
    console.log(event);
    if (event == "AC") {
      setCurrentScreen(" ");
    }
  }
  function plusMinusHandler(event) {
    console.log(event);
    if (event == "+/-") {
      const result = Number(currentScreen) * -1;
      setCurrentScreen(result);
    }
  }

  function percHandler(event) {
    console.log(event);
    if (event == "%") {
      console.log(prevScreen);
      console.log(currentScreen);
      //   const result = (Number(prevScreen) * Number(currentScreen)) / 100;
      //   setCurrentScreen(result);
      setCurrentScreen((Number(prevScreen) * Number(currentScreen)) / 100);
    }
  }
  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="numbers">
          {/* <button onClick={(event, value) => acHandler(event)} value="AC">
            AC
          </button> */}
          {numberButtons.map((val, index) => {
            return (
              <Button
                key={index}
                value={val}
                changeScreenVal={changeScreenVal}
              />
            );
          })}
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
            );
          })}
        </div>
        <div>
          <button className="btn" onClick={equalHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

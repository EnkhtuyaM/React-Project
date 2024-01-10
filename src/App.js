import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import { numberButtons, operatorButtons } from "./utils/constants";

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
  }
  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }
  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="numbers">
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

// import MyName, { DummyNews, DummyProducts } from "./utils/dummyData";
// import Card from "./components/Card";
// import { useState } from "react";

// function useState(initialValue) {
//   let variable = initialValue;

//   function changeVariable(newVar) {
//     variable = newVar;
//   }
//   // reRender
//   return [variable, changeVariable];
// }

// export default function App() {
//   const [count, setCount] = useState(-1);

// function incrementHandler() {
//   setCount(count + 1);
// }
// function decrementHandler() {
//   setCount(count - 1);
// }
// console.log(count);
//   let buttonValues = ["-", "+", "1"];
//   return (
//     <div>
// <Button value="+" />
// <Button value="-" />
// <Button value="1" />
//     </div>
//   );
// }

// let nums = [12, 20, 30];
// const [b, a] = nums;
// // const a = nums[1];
// // const b = nums[0];
// console.log(a);
// console.log(b);
// console.log(nums);

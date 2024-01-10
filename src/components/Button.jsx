import React from "react";
// import Button from "./Button";
import "../styles/button.css";

export default function Button({ value, changeScreenVal }) {
  return (
    <button className="btn" onClick={() => changeScreenVal(value)}>
      {value}
    </button>
  );
}

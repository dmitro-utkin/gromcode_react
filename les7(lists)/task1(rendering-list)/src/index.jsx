import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import NumberList from "./NumberList";

const rootElement = document.querySelector("#root");

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(<NumberList numbers={numbers} />, rootElement);





// const numberElements = numbers.map((num) => <li>{num}</li>);

// const element = (
//   <ul>{numberElements}</ul>

// <ul>
//   <li>{numbers[0]}</li>
//   <li>{numbers[1]}</li>
//   <li>{numbers[2]}</li>
//   <li>{numbers[3]}</li>
//   <li>{numbers[4]}</li>
// </ul>
// );

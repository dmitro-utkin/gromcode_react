import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList.jsx";

const rootElement = document.querySelector("#root");

const users = [
  { id: 1, name: "Tad", age: 18 },
  { id: 2, name: "Anna", age: 45 },
  { id: 3, name: "Alla", age: 45 },
  { id: 4, name: "Bill", age: 45 },
  { id: 5, name: "Lisa", age: 45 },
  // додайте інших користувачів
];

ReactDOM.render(<UsersList users={users} />, rootElement);

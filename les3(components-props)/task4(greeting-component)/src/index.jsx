import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import "./index.scss";

const rootElement = document.querySelector("#root");

const userInfo = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "2007-01-01",
};

ReactDOM.render(<Greeting props={userInfo} />, rootElement);

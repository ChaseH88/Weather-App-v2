import React, { FC } from "react";
import ReactDOM from "react-dom";
import State from "./state";
import Form from "./components/Form";

const App: FC = () => (
  <State>
    <Form />
  </State>
);

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);
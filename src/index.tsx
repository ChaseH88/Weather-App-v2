import React, { FC } from "react";
import ReactDOM from "react-dom";
import AppState from "state";
import Form from "./components/Form";

const App: FC = () => (
  <AppState>
    <Form />
  </AppState>
);

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);
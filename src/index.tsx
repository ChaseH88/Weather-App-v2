import React, { FC } from "react";
import ReactDOM from "react-dom";
import AppState from "state";
import Layout from "components/Layout";
import 'semantic-ui-css/semantic.min.css';
import "./styles/__main.scss";

const App: FC = () => (
  <AppState>
    <Layout />
  </AppState>
);

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);
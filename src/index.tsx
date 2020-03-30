import React, { FC } from "react";
import ReactDOM from "react-dom";
import AppState from "state";
import Layout from "components/Layout";
import { BrowserRouter, Route } from 'react-router-dom';
import "./styles/__main.scss";

/**
 * The main App component, containing each route
 */
const App: FC = (): JSX.Element => (
  <AppState>
    <Route exact path="/" component={Layout} />
  </AppState>
);

/**
 * The AppContainer containing the main JSX for the app
 */
const AppContainer: FC = (): JSX.Element => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/**
 * The root html element
 */
const root = document.querySelector("#app");

ReactDOM.render(<AppContainer />, root);
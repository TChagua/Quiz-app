import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #F3F1F1;

    * {
      box-sizing: border-box;
    }
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

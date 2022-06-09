import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cadastro from "./exercicioquartaaula/exercicio";
import Edit from "./exercicioquartaaula/exercicio";
import Consulta from "./exercicioquartaaula/consulta";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/exercicio" component={Cadastro} />
      <Route exact path="/consulta" component={Consulta} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

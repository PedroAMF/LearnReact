import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import Formulario from "./components/Formulario";
import { Lista, Item } from "./components/Lista";
import Hello from "./components/Hello";
import UseState from "./components/UseState";

import reportWebVitals from "./reportWebVitals";
import useState from "./components/UseState";

ReactDOM.render(
  <React.StrictMode>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <UseState>
      <h1></h1>
    </UseState>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Hello text="Olá">
      <h1>Hello</h1>
    </Hello>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <h1>Formulario</h1>

    <Formulario></Formulario>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <App2 title="Título">Conteúdo</App2>
    <br></br>
    <App2 title="Título2">
      <h1>Conteúdo 2</h1>
    </App2>
    <br></br>
    <h1>Conteúdo 3</h1>
    <App3></App3>

    <br></br>
    <h1>Conteúdo 4</h1>
    <br></br>

    <App4></App4>

    <br></br>
    <br></br>
    <br></br>

    <h1>Conteúdo 5</h1>

    <br></br>

    <App5></App5>
    <br></br>
    <br></br>
    <br></br>

    <h1>Lista</h1>

    <br></br>

    <Lista> teste
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>
      <Item key={998} id={998} completo={true}>
        Teste2
      </Item>
    </Lista>


  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

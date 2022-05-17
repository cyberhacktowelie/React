//React 17
// import React from "react";
// import ReactDOM from "react-dom";

// const saludo = <h1>Hola mundo</h1>

// const divRoot = document.getElementById("root");

// ReactDOM.render(saludo, divRoot); 
//React 18
import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';



const container = document.getElementById("root");

const root = createRoot(container);
// root.render(<h1>Hola mundo</h1>);
// root.render(saludo);

// root.render(<PrimeraApp />);
// root.render(<PrimeraApp  saludo="Hola soy Goku"/>);
// root.render(<PrimeraApp saludo="Hola soy Goku" />);

root.render(<CounterApp value={ 123 } />);
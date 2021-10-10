import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import { CardOne, CardTwo, Navigator, CardThree } from "./App";
import './index.css';


import './App.css';

ReactDOM.render(
  <React.StrictMode>
    
    <Navbar />
    <div className="container">
      <Navigator/>
      <CardOne/>
      <CardTwo/>
      <CardThree/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);


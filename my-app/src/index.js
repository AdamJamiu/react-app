import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import { CardOne, CardTwo, Navigator, CardThree, CardFour } from "./App";
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
      <CardFour/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);


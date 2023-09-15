import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from "react";
import DisplayOne from './components/Data/DisplayOne';
import DisplayAll from './components/Data/DisplayAll';
import {useState, useEffect} from 'react';





function App() { 



  return (
    <div className="App">
      
      <h1> Home </h1>
      <DisplayAll/>
    </div>
  );
}

export default App;

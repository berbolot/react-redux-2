import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputNum from "../components/InputNum";
import './App.css'


const App = () => {
  return (
    <div className="App">
      <h1>отгадай число</h1>
      <InputNum />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import About from './components/About';
import TextUtil from './components/TextUtil';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const [data, setData] = useState(null);
  const [mode, setMode] = useState({
    background: "white",
    color: "black"
  });

  const showData = (status, message) => {
    setData({
      status: status,
      msg: message
    });

    setTimeout(() => {
      setData(null);
    }, 3000);
  }

  const changeMode = () => {
    setMode({
      background: mode.background === "black" ? "white" : "black",
      color: mode.color === "white" ? "black" : "white"
    });
  }

  useEffect(() => {
    let ele = document.getElementById("text-here");
    if (ele) {
      ele.style.backgroundColor = mode.background;
      ele.style.color = mode.color;
    }
    document.body.style.backgroundColor = mode.background;
    document.body.style.color = mode.color;
  }, [mode]);

  return (
    <Router>
      <Navbar title="Magic Text" mode={mode} changeMode={changeMode} />
      <Alerts data={data} />
      <Routes>
        <Route exact path="/" element={<TextUtil heading="Enter Your Text Below" showData={showData} mode={mode} />}>
        </Route>
        <Route exact path="/about" element={<About mode={mode} />}>
        </Route>
      </Routes>
    </Router>
  )
}
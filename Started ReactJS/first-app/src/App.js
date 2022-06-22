import React, { useState, useEffect } from 'react'
import Alerts from './components/Alerts'
import Navbar from './components/Navbar'
import TextUtil from './components/TextUtil'

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
    document.getElementById("text-here").style.backgroundColor = mode.background;
    document.getElementById("text-here").style.color = mode.color;
    document.body.style.backgroundColor = mode.background;
    document.body.style.color = mode.color;
  }, [mode]);

  return (
    <>
      <Navbar title="Magic Text" mode={mode} changeMode={changeMode} />
      <Alerts data={data} />
      <TextUtil heading="Enter Your Text Below" showData={showData} mode={mode} />
    </>
  )
}
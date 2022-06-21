import React, { useState } from 'react'
import Alerts from './components/Alerts'
import Navbar from './components/Navbar'
import TextUtil from './components/TextUtil'

export default function App() {
  const [data, setData] = useState(null);

  const showData = (status, message) => {
    setData({
      status: status,
      msg: message
    });

    setTimeout(() => {
      setData(null);
    }, 3000);
  }
  return (
    <>
      <Navbar title="Magic Text" />
      <Alerts data={data} />
      <TextUtil heading="Enter Your Text Below" showData={showData} />
    </>
  )
}
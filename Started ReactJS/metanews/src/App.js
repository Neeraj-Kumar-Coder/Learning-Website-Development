import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsSection />
      </div>
    )
  }
}

export default App;
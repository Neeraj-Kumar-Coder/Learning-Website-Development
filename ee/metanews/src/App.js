import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsSection key="general" category="general" />}></Route>
            <Route exact path="/general" element={<NewsSection key="general" category="general" />}></Route>
            <Route exact path="/business" element={<NewsSection key="business" category="business" />}></Route>
            <Route exact path="/entertainment" element={<NewsSection key="entertainment" category="entertainment" />}></Route>
            <Route exact path="/health" element={<NewsSection key="health" category="health" />}></Route>
            <Route exact path="/science" element={<NewsSection key="science" category="science" />}></Route>
            <Route exact path="/sports" element={<NewsSection key="sports" category="sports" />}></Route>
            <Route exact path="/technology" element={<NewsSection key="technology" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
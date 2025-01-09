import React, { useState, useEffect } from 'react'
import Preloader from '../src/components/Pre'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'
import Particle from 'components/Particle'
import CertificationBlock from './components/About/Certification'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [load, upadateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <Particle />

        <ScrollToTop />
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <About />
        </div>

        {/* <CertificationBlock /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App

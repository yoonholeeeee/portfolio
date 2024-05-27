import React from 'react'
import Navigation from './components/Navigation'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <footer>  
        <Footer />
      </footer>
    </div>
  )
}

export default App
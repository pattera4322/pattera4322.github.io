import React from 'react';
import './App.css'; // Make sure to create and import your CSS files accordingly
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

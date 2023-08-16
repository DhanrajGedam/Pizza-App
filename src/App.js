import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  
  return (
    
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Home />
    <Routes>
      
      <Route path='/' exact element={Home} />
      <Route path='/menu' exact element={Menu} />
      <Route path='/about' exact element={About} />
      <Route path='/contact' exact element={Contact} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

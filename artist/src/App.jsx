import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Bio from './components/Bio';
import Works from './components/Works';
import Shows from './components/Shows';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Hero/>
        <Bio/>
        <Works/>
      </div>
    </Router>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Resume />
    </>
  );
}

export default App

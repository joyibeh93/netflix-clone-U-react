import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Browse from './pages/browse.js'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path= "/" element= {< Home />}  />
      <Route path= "/browse" element ={ < Browse />} />
    </Routes>

  );
}

export default App;

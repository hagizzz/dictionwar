
import React  from 'react';
import { Routes, Route } from "react-router-dom"

import './App.scss';
import HomePage from './pages/HomePage';
import Solo from './pages/Solo';
import Multiple from './pages/Multiple';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="solo" element={ <Solo /> } />
        <Route path="multiple" element={ <Multiple /> } />
      </Routes>
    </div>
  );
}

export default App;

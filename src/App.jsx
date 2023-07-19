
import React  from 'react';
import { Routes, Route } from "react-router-dom"

import './App.scss';
import HomePage from './HomePage';
import Solo from './Solo';
import Multiple from './Multiple';

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

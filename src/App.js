import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Routes } from 'react-router-dom';

const Hats = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);


function App() {
  return (
    
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route path="/hats" element={<Hats />} />
    </Routes>
  );
}

export default App;

import './App.css';
import React from 'react';
import Exercicio1 from './pages/Exercicio1';
import Exercicio2 from './pages/Exercicio2';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/Exercicio1" element={<Exercicio1/>}/>
          <Route path="/Exercicio2" element={<Exercicio2/>}/>
          <Route path="/Exercicio3" element={<Exercicio1/>}/>
      </Routes>
  );
}

export default App;

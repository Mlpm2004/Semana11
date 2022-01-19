import './App.css';
import React from 'react';
import Exercicio1 from './pages/Exercicio1';
import Exercicio2 from './pages/Exercicio2';
import Exercicio3 from './pages/Exercicio3';
import Exercicio4 from './pages/Exercicio4';
import Exercicio5 from './pages/Exercicio5';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
      <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/Exercicio1" element={<Exercicio1/>}/>
          <Route path="/Exercicio2" element={<Exercicio2/>}/>
          <Route path="/Exercicio3" element={<Exercicio3/>}/>
          <Route path="/Exercicio4" element={<Exercicio4/>}/>
          <Route path="/Exercicio5" element={<Exercicio5/>}/>
      </Routes>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Pokemons from './pages/Pokemons';
import About from './pages/About';
import Movies from './pages/Movies';
import MyProjects from './pages/MyProjects';
import Education from './pages/Education';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
        <Route >
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

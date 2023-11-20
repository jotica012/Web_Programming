import { useState } from 'react';
import './App.css'
import Layout from './components/Layout';
import { Login } from './pages/Login';
import { Pokedex } from './pages/Pokedex'
import { MyContext } from './utils/MyContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
        <MyContext.Provider value={{ pokemon, setPokemon }}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Login />} />
            <Route path="pokedex" element={<Pokedex />} />
          </Route>
      </Routes>
    </BrowserRouter>
        </MyContext.Provider>
  )
}

export default App

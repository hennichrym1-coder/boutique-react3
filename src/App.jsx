import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import "./App.css";

function Header() {
  return (
    <header>
      <h1>Boutique React</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#produits">Produits</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

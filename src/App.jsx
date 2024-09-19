// src/App.jsx
// import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Transformando <span className="highlight">vidas</span>, uma <span className="highlight">peça</span> de cada vez.</h1>
        <p>O Re-Vest é um projeto onde você pode pedir roupas doadas online...</p>
      </header>
      <div className="cards">
        <div className="card">
          <h3>Contribua</h3>
          <p>Junte-se a nós e ajude a transformar ideias em realidade.</p>
        </div>
        <div className="card">
          <h3>Catálogo</h3>
          <p>Explore nossos produtos e encontre exatamente o que procura!</p>
        </div>
        <div className="card">
          <h3>Data do Evento</h3>
          <p>Esteja informado e aproveite a oportunidade para participar!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
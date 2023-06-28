import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;

  const [name] = useState("Fias");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "5px solid red"
        }}>
        Este parágrafo tem o estilo inline
      </p>
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "5px solid red"
        }}>
        Este parágrafo tem o estilo inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 
      style={n < 10 ? { color: "red" } : { color: "black" }}>CSS Dinâmico
      </h2>
      <h2 
      style={n > 10 ? { color: "red" } : { color: "black" }}>CSS Dinâmico
      </h2>
      <h2 style={name === "Fias" ? { color: "grey", backgroundColor: "gold" } : { color: "blue" }}>Teste nome</h2>
      {/* Class dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este estilo vai ter uma classe dinâmica  
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;

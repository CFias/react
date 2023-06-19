import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
        <h1>Iniciando a seção 3</h1>
          {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
          {/* Imagem em asset */}
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <div>
          <ManageData />
        </div>
    </div>
  );
}

export default App;

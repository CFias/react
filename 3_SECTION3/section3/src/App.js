import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Milena";
  const userName = useState(" Cleidson Ramos ");

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
          <ListRender />
          <ConditionalRender />
          {/* props */}
          <ShowUserName name={userName} />
          {/* destucturing */}
          <CarDetails brand="VW" km={70000} color="Vermelho" />
          {/* reaproveitando */}
          <CarDetails brand="Ford" km={0} color="Cinza" newCar={true} />
          <CarDetails brand="Fiat" km={6000} color="Branco" newCar={true} />
          <CarDetails brand="Chevrolet" km={95000} color="Azul" newCar={false} />
        </div>
    </div>
  );
}

export default App;

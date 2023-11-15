import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Messege from './components/Messege';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const userName = useState("Cleidson");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "Verde", km: 15000, newCar: false },
    { id: 3, brand: "Honda", color: "Prata", km: 0, newCar: true } 
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {id: 1, name: "Cleidson", job: "Programador", age: 25},
    {id: 2, name: "Milena", job: "Empresária", age: 25}
  ];

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
          <ManageData />
          <ListRender />
          <ConditionalRender />

          {/* props */}
          <ShowUserName nome={userName} />

          {/* destucturing */}
          <CarDetails brand="VW" km={70000} color="Vermelho" />

          {/* reaproveitando */}
          <CarDetails brand="Ford" km={0} color="Cinza" newCar={true} />
          <CarDetails brand="Fiat" km={6000} color="Branco" newCar={true} />

          {/* loop em array de objetos */}
          {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar} />
          ))}
        {/* Fragment */}
        <Fragment propFragment="Teste" />
        {/* children */}
        <Container myValue="Testing">
            <p>Este é o conteúdo container</p>
        </Container>
        <Container myValue="Testing 2">
            <p>Conteúdo 2</p>
        </Container>
        {/* Executar uma função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* state lift */}
        <Messege  msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />
        {/* Tarefa */}
        {users.map((user) => (
          <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
          />
        ))};
    </div>
  );
};

export default App;
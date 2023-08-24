import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const myCars = [ 
    { id: 1, name: "Elantra", km: 10000, color: "Branca" },
    { id: 2, name: "Ka", km: 5700, color: "Cinza Moscou" },
    { id: 3, name: "Edge", km: 0, color: "Preto" }
  ];

  return (
    <div className="App">
      <h1>Shwroom de carros</h1>
      <div className="car-container">
          {myCars.map(( car ) => (
            <CarDetails key={car.id} car={car}/>
          ))}
      </div>
    </div>
  );
};

export default App;

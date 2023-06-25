const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>key={CarDetails.id}</li>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            <li>Novo: {newCar}</li>
        </ul>
        {newCar && <p>carro novo!</p>}
    </div>
)};

export default CarDetails;
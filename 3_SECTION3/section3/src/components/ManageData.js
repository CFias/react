import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);

    console.log(number)

    const [nome, setNome] = useState("Cleidson");
    console.log(nome)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => (setNumber(25))}>Mudar Número</button>
        </div>
        <div>
            <p>Seu nome: {nome}</p>
            <button onClick={() => setNome("Cleidson Fias")}>Adicionar sobre nome</button>
        </div>
    </div>
  )
}

export default ManageData;
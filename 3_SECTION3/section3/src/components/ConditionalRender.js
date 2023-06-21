import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true); 

    const [name, setName] = useState("Cleidson");

    const [vel, setVel] = useState(101);

    const [salary, setSalary] = useState(4500);

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é false</p>}
        <h1>If ternário</h1>
        {name === "Fias" ? (
            <div>
                <p>
                    O nome é Fias!
                </p>
            </div>    
        ) : (
            <div>
                <p>
                    O nome não foi encontrado!
                </p>
            </div>
        )}
        <button onClick={() => setName("Fias")}>Clique aqui!</button>
        {vel > 100 ? (
            <div>
                <p>Você foi multado!</p>
            </div>
        ) : (
            <div>
                <p>Velocidade permitida!</p>
            </div>
        )}
        <button onClick={() => setVel(90)}>Clique e saiba se foi multado</button>
        {salary >= 4500 ? (
            <div>
                <p>Eu quero esse emprego!</p>
            </div>
        ) : (
            <div>
                <p>O salário de {salary}, é muito baixo para o que eu sei.</p>
            </div>
        )}
        <button onClick={() => setSalary(3500)}>Buscar salário</button>
    </div>
  )
}

export default ConditionalRender
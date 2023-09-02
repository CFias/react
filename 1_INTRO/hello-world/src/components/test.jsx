import React, { useState } from 'react';

export default function Testes() {
    const [nome, setNome] = useState("Cleidson Fias");


  return (
    <div>
        <input value="test" type="text" placeholder='Digite o seu nome'/>
        <button value="test" >Clique</button>
    </div>
  );
}

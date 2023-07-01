import "./MyForms.css"
import { useState } from "react";

const MyForms = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  return (
    <div className="container">
      {/* 1 - criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName} />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input 
          type="email" 
          name="email" 
          placeholder="Digite aqui o seu e-mail" 
          onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default MyForms
import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
    const messeges = ["Oi", "Olá", "Oi, tudo bem ?"];
  return (
    <div>
        <button onClick={() => handleMessage(messeges[0])}>1</button>
        <button onClick={() => handleMessage(messeges[1])}>2</button>
        <button onClick={() => handleMessage(messeges[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState;
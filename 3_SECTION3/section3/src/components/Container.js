import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este é o título Container</h2>
        {children}
        <p>o valor é: {myValue}</p>
    </div>
  );
};

export default Container;
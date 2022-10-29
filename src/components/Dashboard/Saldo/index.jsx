import React from "react";
import "./saldo.css";

function Saldo({ valor }) {
  return (
    <div className="saldo-container">
      <div>
        <h3>Valor Total:</h3>
        <p>
          {Number(valor).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

export default Saldo;

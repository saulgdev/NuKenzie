import React from "react";
import Lixeira from "./shopping-basket.png";

function Li({ handleDelete, element }) {
  return (
    <li
      key={element.id}
      className={element.categoria === "Entrada" ? "entrada" : "despesas"}
    >
      <div>
        <h3>{element.description}</h3>
        <p>
          {Number(element.valor).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button>
          <img
            id={element.id}
            onClick={(e) => handleDelete(element.id, element.valor)}
            src={Lixeira}
            alt=""
          />
        </button>
      </div>
      <p>{element.categoria}</p>
    </li>
  );
}

export default Li;

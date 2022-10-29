import React from "react";
//import { useState } from "react";
import "./extrato.css";
import Li from "./transaction";

function Extrato({ setData, data, setValor }) {
  //const [filtroEntrada, setFiltroEntrada] = useState([]);
  //const [filtroDespesa, setFiltroDespesas] = useState([]);

  function handleDelete(index, elValor) {
    const filtrada = data.filter((el) => el.id !== index);
    setData(filtrada);
    setValor((valor) => valor - elValor);
  }

  return (
    <>
      <div className="filtros">
        <h3>Resumo financeiro</h3>
        <div>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <div className="transactions">
        <ul>
          {data.map((el) => (
            <Li handleDelete={handleDelete} element={el} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Extrato;

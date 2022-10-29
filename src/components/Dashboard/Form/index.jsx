import React from "react";
import { useState } from "react";
import "./form.css";

function Form({ setData, setValorTotal, valorElement, setCount, count }) {
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState(0);
  const [categoria, setCategoria] = useState("Entrada");

  const body = {
    id: count,
    description,
    valor: Number(valor),
    categoria,
  };
  return (
    <form
      onSubmit={(evento) => evento.preventDefault()}
      className="form-container"
    >
      <p>Descrição</p>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Digite sua descrição"
      />
      <p>Ex.: Compra de Roupas</p>
      <div>
        <div>
          <p>Valor</p>
          <input
            required
            onChange={(e) => setValor(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <p>Tipo de Valor</p>
          <select name="Entrada" onChange={(e) => setCategoria(e.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Despesas">Despesas</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => {
          setData((data) => [...data, body]);
          body.categoria === "Entrada"
            ? setValorTotal(valorElement + body.valor)
            : setValorTotal(valorElement - body.valor);
          setCount(count + 1);
        }}
      >
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;

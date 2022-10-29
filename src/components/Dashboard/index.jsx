import React, { useState } from "react";
import Extrato from "./Extrato";
import Form from "./Form";
import Header from "./Header";
import Saldo from "./Saldo";
import "./dashboard.css";

function Dashboard({ logout }) {
  const [data, setData] = useState([]);
  const [valor, setValor] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <Header logout={logout} />
      <main className="main-container">
        <div className="form">
          <Form
            setData={setData}
            valorElement={valor}
            setValorTotal={setValor}
            setCount={setCount}
            count={count}
          />
          <Saldo valor={valor} data={data} />
        </div>
        <div className="extrato-container">
          {
            <Extrato
              setData={setData}
              setId={setCount}
              count={count}
              data={data}
              setValor={setValor}
            />
          }
        </div>
      </main>
    </>
  );
}

export default Dashboard;

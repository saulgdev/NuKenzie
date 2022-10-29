import React from "react";
import imagem from "./illustration.svg";
import "./home.css";

function Home({ login }) {
  return (
    <>
      <main className="main-home-container">
        <div className="description">
          <h3>
            <strong>Nu</strong> Kenzie
          </h3>
          <h2>Centralize o controle das suas finanças</h2>
          <span>de forma rápida e segura</span>
          <button onClick={() => login(false)}>Iniciar</button>
        </div>
        <div className="logo">
          <img src={imagem} alt="" />
        </div>
      </main>
    </>
  );
}

export default Home;

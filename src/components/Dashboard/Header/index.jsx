import React from "react";
import "./header.css";

function Header({ logout }) {
  return (
    <>
      <header>
        <div className="header-container">
          <h3>
            <strong>Nu</strong> Kenzie
          </h3>
          <button onClick={() => logout(true)}>Inicio</button>
        </div>
      </header>
    </>
  );
}

export default Header;

import React from 'react';
import styles from "./Tarjeta.module.css";

function Tarjeta({ usuario, games }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "300px",
      }}>
      <h2>{usuario.nombre}</h2>
      <p>{usuario.descripcion}</p>
      <h3>Videojuegos:</h3>
      <ul>
        {usuario.videojuegos.map(videojuegoId => {
          const videojuego = games.find(game => game.ID === videojuegoId);
          return (
            <li key={videojuegoId}>
              <strong>{videojuego.titulo}</strong> - {videojuego.genero}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tarjeta;

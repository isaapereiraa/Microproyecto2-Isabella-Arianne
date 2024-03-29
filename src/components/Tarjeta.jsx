import React, { useState } from 'react';
import styles from './Tarjeta.module.css';

function Tarjeta({ usuario, games }) {
  const [afiliado, setAfiliado] = useState(false);

  const handleAfiliacion = () => {
    setAfiliado(!afiliado);
  };

  return (
    <div className={styles.Tarjeta}>
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
      <button onClick={handleAfiliacion}>
        {afiliado ? 'Desafiliarse' : 'Afiliarse'}
      </button>
    </div>
  );
}

export default Tarjeta;

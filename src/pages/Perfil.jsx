import React, { useState } from 'react';
import styles from "./Perfil.module.css";

const Perfil = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [juegoFavorito, setJuegoFavorito] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    };

    const handleJuegoFavoritoChange = (e) => {
        setJuegoFavorito(e.target.value);
    };

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={handleNombreChange} />
            </label>
            <br />
            <label>
                Apellido:
                <input type="text" value={apellido} onChange={handleApellidoChange} />
            </label>
            <br />
            <label>
                Juego Favorito:
                <input type="text" value={juegoFavorito} onChange={handleJuegoFavoritoChange} />
            </label>
        </div>
    );
};

export default Perfil;

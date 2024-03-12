import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>¡Bienvenido a nuestra plataforma de juegos!</h1>
            <p style={styles.description}>Explora un mundo de diversión y competencia en nuestra plataforma de juegos. ¿Listo para jugar?</p>
            <p style={styles.description}>Antes de empezar regístrate o inicia sesión</p>
            <div style={styles.divider}></div>
            <Link to="/login" style={styles.button}>Iniciar Sesión</Link>
            <Link to="/registro" style={styles.button}>Registrarse</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa', // Color de fondo
        padding: '20px',
        fontFamily: 'sans-serif', // Fuente genérica
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '20px',
    },
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: '#ccc',
        margin: '20px 0',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        margin: '10px',
    },
};

export default Home;

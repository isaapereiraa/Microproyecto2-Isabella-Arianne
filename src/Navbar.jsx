
import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <>
            <header>
                <h1>
                    <Link to='/'>Logo</Link>
                </h1>

                <nav>
                    {state?.logged && (
                        <>
                            <Link to='/buscador'>Buscador</Link>
                            <Link to='/clubes'>Clubes</Link>
                            <Link to='/perfil'>Perfil</Link>
                        </>
                    )}
                </nav>

                {state?.logged ? (
                    <div className='user'>
                        <span className='username'>{state?.name}</span>
                        <button className='btn-logout' onClick={onLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <nav>
                        <Link to='/login'>Iniciar sesión</Link>
                        <Link to='/registro'>Registrarse</Link>
                    </nav>
                )}
            </header>

            <Outlet />
        </>
    );
};
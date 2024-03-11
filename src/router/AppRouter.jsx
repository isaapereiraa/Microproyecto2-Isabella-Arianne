// AppRouter.jsx
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Home, Login, Registro, Dashboard, Buscador, Clubes, Perfil } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='registro' element={<Registro />} />
                    <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    {/* Rutas públicas condicionales */}
                    <Route path='buscador' element={<PublicRoute><Buscador /></PublicRoute>} />
                    <Route path='clubes' element={<PublicRoute><Clubes /></PublicRoute>} />
                    <Route path='perfil' element={<PublicRoute><Perfil /></PublicRoute>} />
                </Route>
            </Routes>
        </>
    );
};

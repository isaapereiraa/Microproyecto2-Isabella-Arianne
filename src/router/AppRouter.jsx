import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home, Login, Registro } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import Clubes from "../pages/Clubes";
import Perfil from "../pages/Perfil";
import Buscador from "../pages/Buscador";
import Dashboard from "../pages/Dashboard";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='registro' element={<Registro />} />
					<Route path='perfil' element={<Perfil />} />
					<Route path='buscador' element={<Buscador />} />
					<Route path='clubes' element={<Clubes />} />
					
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};



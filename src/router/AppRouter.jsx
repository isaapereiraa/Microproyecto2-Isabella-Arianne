import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home, Login, Registro, Dashboard } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='registro' element={<Registro />} />
					
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



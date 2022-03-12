import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostDetails from "./pages/postDetails/PostDetails";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

const App = () => {
	const user = false;

	return (
		<Router>
			<Topbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:postId" element={<PostDetails />} />

				<Route path="/write" element={user ? <Write /> : <Navigate to={"/login"} />} />
				<Route path="/settings" element={user ? <Settings /> : <Navigate to={"/login"} />} />
				<Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
				<Route path="/register" element={user ? <Navigate to={"/"} /> : <Register />} />
			</Routes>
		</Router>
	);
};

export default App;

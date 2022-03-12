import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "../../helpers/axios.js";
import "./register.styles.css";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		setError(false);
		e.preventDefault();
		try {
			const { data } = await axios.post("/auth/register", { username, email, password });
			console.log(data);
			if (data._id) navigate("/login");
		} catch (error) {
			setError(true);
			console.log(error.response.data);
		}
	};

	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your username..."
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label>Email</label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your email..."
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Password</label>
				<input
					className="registerInput"
					type="password"
					placeholder="Enter your password..."
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button className="registerButton">Register</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to={"/login"}>
					Login
				</Link>
			</button>
			{error && <span className="errorItem">Something went wrong..!</span>}
		</div>
	);
};

export default Register;

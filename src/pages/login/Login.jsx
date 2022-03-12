import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context/Context";
import { LoginFailure, LoginStart, LoginSuccess } from "../../context/actions";
import axios from "../../helpers/axios";

import "./login.styles.css";

const Login = () => {
	const usernameRef = useRef();
	const passwordRef = useRef();

	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(LoginStart());

			const { data } = await axios.post("/auth/login", {
				username: usernameRef.current.value,
				password: passwordRef.current.value,
			});

			dispatch(LoginSuccess(data));
		} catch (error) {
			dispatch(LoginFailure());
		}
	};

	// console.log(isFetching);

	return (
		<div className="login">
			<span className="loginTitle">Login</span>

			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className="loginInput"
					type="text"
					placeholder="Enter your username..."
					ref={usernameRef}
				/>

				<label>Password</label>
				<input
					className="loginInput"
					type="password"
					placeholder="Enter your password..."
					ref={passwordRef}
				/>

				<button className="loginButton" type="submit" disabled={isFetching}>
					Login
				</button>
			</form>

			<button className="loginRegisterButton">
				<Link className="link" to={"/register"}>
					Register
				</Link>
			</button>
		</div>
	);
};

export default Login;

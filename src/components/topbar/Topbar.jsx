import React, { useContext } from "react";
import "./topbar.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../context/actions";
import { Context } from "../../context/Context";
import { generatePublicUrl } from "../../helpers/publicUrl";

const Topbar = () => {
	const { user, dispatch } = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(Logout());
		navigate("/login");
	};

	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook-square"></i>
				<i className="topIcon fa-brands fa-twitter-square"></i>
				<i className="topIcon fa-brands fa-pinterest-square"></i>
				<i className="topIcon fa-brands fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to={"/"} className="link">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link to={"/about"} className="link">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link to={"/contact"} className="link">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link to={"/write"} className="link">
							WRITE
						</Link>
					</li>

					{user && (
						<li className="topListItem" onClick={handleLogout}>
							LOGOUT
						</li>
					)}
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link to={"/settings"} className="link">
						<img src={generatePublicUrl(user?.profilePic)} alt="my img" className="topImg" />
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							{" "}
							<Link to={"/login"} className="link">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							{" "}
							<Link to={"/register"} className="link">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
};

export default Topbar;

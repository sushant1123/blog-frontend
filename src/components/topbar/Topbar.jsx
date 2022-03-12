import React from "react";
import "./topbar.styles.css";
import MyImage from "../../assets/mine.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
	const user = false;

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
						<li className="topListItem">
							<Link to={"/"} className="link">
								LOGOUT
							</Link>
						</li>
					)}
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img src={MyImage} alt="my img" className="topImg" />
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

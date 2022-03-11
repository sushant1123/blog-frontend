import React from "react";
import "./header.styles.css";
import nature from "../../assets/nature.jpg";

const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSmall">React & Node</span>
				<span className="headerTitleBig">Blog</span>
			</div>
			<img className="headerImg" src={nature} alt="" />
		</div>
	);
};

export default Header;

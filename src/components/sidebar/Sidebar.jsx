import React from "react";
import "./sidebar.styles.css";
import sunset from "../../assets/sunset.jpg";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img src={sunset} alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam mollitia, laborum
					sed, perspiciatis quo aspernatur ducimus quia numquam tempore, provident hic ut
					repellendus doloribus quidem. Eos autem at nihil!
				</p>
			</div>

			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Movies</li>
				</ul>
			</div>

			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<ul className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-facebook-square"></i>
					<i className="sidebarIcon fa-brands fa-twitter-square"></i>
					<i className="sidebarIcon fa-brands fa-pinterest-square"></i>
					<i className="sidebarIcon fa-brands fa-instagram-square"></i>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

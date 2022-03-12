import React, { useEffect, useState } from "react";
import "./sidebar.styles.css";
import sunset from "../../assets/sunset.jpg";
import axios from "../../helpers/axios";
import lodash from "lodash";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const { data } = await axios.get("/categories");
			setCategories(data);
		};
		fetchCategories();
	}, []);

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
				{categories?.length ? (
					<ul className="sidebarList">
						{categories.map((cat) => (
							<li className="sidebarListItem" key={cat?._id}>
								<Link className="link" to={`/?category=${cat?.name}`}>
									{lodash.capitalize(cat?.name)}
								</Link>
							</li>
						))}
					</ul>
				) : (
					<li style={{ display: "inline-block" }}>No Categories Available</li>
				)}
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

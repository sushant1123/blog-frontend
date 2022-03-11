import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.styles.css";

const Home = () => {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;

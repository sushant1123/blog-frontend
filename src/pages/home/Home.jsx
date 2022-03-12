import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { fetchPosts } from "../../api-calls";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "../../helpers/axios";
import "./home.styles.css";

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get(`/posts${search}`);
			setPosts(data);
			console.log(data);
		};

		fetchPosts();
	}, [search]);

	console.log(search);
	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;

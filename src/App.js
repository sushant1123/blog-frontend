import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import PostDetails from "./pages/postDetails/PostDetails";
import Write from "./pages/write/Write";

const App = () => {
	return (
		<>
			<Topbar />
			{/* <Home /> */}
			{/* <PostDetails /> */}
			<Write />
		</>
	);
};

export default App;

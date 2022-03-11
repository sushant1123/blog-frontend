import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./postDetails.styles.css";

const PostDetails = () => {
	return (
		<div className="postDetails">
			<SinglePost />
			<Sidebar />
		</div>
	);
};

export default PostDetails;

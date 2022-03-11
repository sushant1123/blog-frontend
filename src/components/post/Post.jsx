import React from "react";
import "./post.styles.css";
import post from "../../assets/post.jpg";

const Post = () => {
	return (
		<div className="post">
			<img src={post} alt="" className="postImg" />
			<div className="postInfo">
				<div className="postCategories">
					<span className="postCategory">Music</span>
					<span className="postCategory">Life</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDescription">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto magnam quisquam
				qui officiis ut! Consequuntur rerum itaque reprehenderit odio, molestias debitis? Dolores est
				veniam ut nesciunt, ipsa odit rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Eius temporibus dolorem corrupti mollitia quaerat cum dicta aliquid beatae. Illum eius,
				facilis omnis nam porro harum? Facere rem aliquid dicta voluptate! Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Vitae, illum atque iste exercitationem accusantium nihil? Dicta
				quaerat alias voluptatem? Sunt voluptate molestias natus ad totam, cupiditate omnis officiis?
				Tempora, qui.
			</p>
		</div>
	);
};

export default Post;

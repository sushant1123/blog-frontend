import React from "react";
import moment from "moment";
import lodash from "lodash";
import { generatePublicUrl } from "../../helpers/publicUrl.js";

import "./post.styles.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
	return (
		<div className="post">
			{post?.postPic && <img src={generatePublicUrl(post.postPic)} alt="" className="postImg" />}
			<div className="postInfo">
				<div className="postCategories">
					{post?.categories.map((cat, index) => (
						<span className="postCategory" key={index}>
							{cat}
						</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">
						{lodash.capitalize(post?.title)}
						{post.title.charAt(post?.title?.length - 1) !== "." && "."}
					</span>
				</Link>
				<hr />
				<span className="postDate">{new Date(post?.createdAt).toDateString()}</span>
				{/* <span className="postDate">{moment().from(post.createdAt)}</span> */}
			</div>
			<p className="postDescription">{lodash.capitalize(post?.desc)}</p>
		</div>
	);
};

export default Post;

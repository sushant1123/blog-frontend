import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import lodash from "lodash";

import axios from "../../helpers/axios.js";
import { generatePublicUrl } from "../../helpers/publicUrl.js";
import "./singlePost.styles.css";

const SinglePost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState([]);

	useEffect(() => {
		const fetchSinglePost = async () => {
			const { data } = await axios.get(`/posts/${postId}`);
			setPost(data);
		};
		fetchSinglePost();
	}, [postId]);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.postPic && (
					<img className="singlePostImg" src={generatePublicUrl(post.postPic)} alt={post?.title} />
				)}
				<h1 className="singlePostTitle">
					{lodash.capitalize(post?.title)}
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">
							<Link className="link" to={`/?user=${post?.username}`}>
								{post?.username}
							</Link>
						</b>
					</span>
					<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className="singlePostDescription">{lodash.capitalize(post.desc)}</p>
			</div>
		</div>
	);
};

export default SinglePost;

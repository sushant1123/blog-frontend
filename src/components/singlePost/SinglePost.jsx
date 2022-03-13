import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import lodash from "lodash";

import axios from "../../helpers/axios.js";
import { generatePublicUrl } from "../../helpers/publicUrl.js";
import "./singlePost.styles.css";
import { Context } from "../../context/Context.js";

const SinglePost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});

	const { user } = useContext(Context);

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchSinglePost = async () => {
			const { data } = await axios.get(`/posts/${postId}`);
			setPost(data);
			setTitle(data.title);
			setDesc(data.desc);
		};
		fetchSinglePost();
	}, [postId]);

	const handleDeleteClick = async () => {
		try {
			//when sending delete request, we need to send payload in {data: our payload}
			await axios.delete(`/posts/${postId}`, { data: { username: user?.username } });

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateClick = async (e) => {
		e.preventDefault();

		try {
			const formUpdateData = new FormData();
			formUpdateData.append("username", user?.username);
			formUpdateData.append("title", title);
			formUpdateData.append("desc", desc);

			const { data } = await axios.put(`/posts/${postId}`, formUpdateData);
			console.log(data);
			// navigate("/");
			window.location.reload();
			setUpdateMode(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.postPic && (
					<img className="singlePostImg" src={generatePublicUrl(post.postPic)} alt={post?.title} />
				)}
				{updateMode ? (
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="singlePostTitleInput"
					/>
				) : (
					<h1 className="singlePostTitle">
						{lodash.capitalize(post?.title)}
						{post?.username === user?.username && (
							<div className="singlePostEdit">
								<i
									className="singlePostIcon far fa-edit"
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className="singlePostIcon far fa-trash-alt"
									onClick={handleDeleteClick}
								></i>
							</div>
						)}
					</h1>
				)}
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

				{updateMode ? (
					<textarea
						type="text"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
						className="singlePostDescriptionInput"
					/>
				) : (
					<p className="singlePostDescription">{lodash.capitalize(post.desc)}</p>
				)}

				{updateMode && (
					<button className="singlePostButton" onClick={handleUpdateClick}>
						Update
					</button>
				)}
			</div>
		</div>
	);
};

export default SinglePost;

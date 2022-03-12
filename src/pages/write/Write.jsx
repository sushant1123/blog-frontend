import React, { useContext, useState } from "react";
import "./write.styles.css";
import { Context } from "../../context/Context";
import MyImg from "../../assets/usedImg.jpg";
import axios from "../../helpers/axios";

const Write = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const newPost = { title, username: user.username, desc, file };
			const { data } = await axios.post("/posts", {});
		} catch (error) {}
	};

	return (
		<div className="write">
			<img className="writeImg" src={MyImg} alt="" />
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input id="fileInput" type="file" className="fileInput" />
					<input className="writeInput" placeholder="Title" type="text" autoFocus={true} />
				</div>
				<div className="writeFormGroup">
					<textarea className="writeInput writeText" placeholder="Tell your story..." type="text" />
				</div>
				<button className="writeSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default Write;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../context/Context";
import axios from "../../helpers/axios";

import "./write.styles.css";

const Write = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState("");

	const navigate = useNavigate();

	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();

			formData.append("title", title);
			formData.append("username", user?.username);
			formData.append("desc", desc);

			if (file) {
				formData.append("postPic", file);
			}

			const { data } = await axios.post("/posts", formData);
			setTitle("");
			setDesc("");
			setFile("");
			navigate(`/post/${data?._id}`);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="write">
			{file && <img className="writeImg" src={URL.createObjectURL(file)} alt="uploaded-img" />}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input
						id="fileInput"
						type="file"
						className="fileInput"
						onChange={(e) => setFile(e.target.files[0])}
					/>

					<input
						className="writeInput"
						placeholder="Title"
						type="text"
						autoFocus={true}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						className="writeInput writeText"
						placeholder="Tell your story..."
						type="text"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>
				<button className="writeSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default Write;

import React from "react";
import "./write.styles.css";
import MyImg from "../../assets/usedImg.jpg";

const Write = () => {
	return (
		<div className="write">
			<img className="writeImg" src={MyImg} alt="" />
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input id="fileInput" type="file" className="fileInput" />
					<input className="writeInput" placeholder="Title" type="text" autoFocus={true} />
				</div>
				<div className="writeFormGroup">
					<textarea
						className="writeInput writeText"
						placeholder="Tell your story..."
						type="text"
						// autoFocus={true}
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

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.styles.css";
import MyImg from "../../assets/usedImg.jpg";

const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Update Your Account</span>
					<span className="settingsTitleDelete">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img src={MyImg} alt="" />
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>{" "}
						</label>
						<input id="fileInput" type="file" className="settingsPPInput" />
					</div>

					<label>Username</label>
					<input type="text" placeholder="Sushant" name="name" />

					<label>Email</label>
					<input type="email" placeholder="sushantbahirat@gmail.com" name="email" />

					<label>Password</label>
					<input type="password" placeholder="Password" name="password" />

					<button className="settingsSubmitButton" type="submit">
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;

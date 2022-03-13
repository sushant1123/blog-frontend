import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "../../helpers/axios";
import { generatePublicUrl } from "../../helpers/publicUrl";
import { UpdateFailure, UpdateStart, UpdateSuccess } from "../../context/actions";
import "./settings.styles.css";

const Settings = () => {
	const { user, dispatch } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [file, setFile] = useState("");
	const [username, setUsername] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setEmail(user?.email);
		setUsername(user?.username);
	}, []);

	const handleUpdateUserSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(UpdateStart());

			const formData = new FormData();

			formData.append("email", email);
			formData.append("username", user?.username);
			formData.append("userId", user?._id);
			if (password.length) {
				formData.append("password", password);
			}

			if (file) {
				formData.append("profilePic", file);
			}

			// for (let key of formData.keys()) {
			// 	console.log(`${key} :=> ${formData.get(key)}`);
			// }

			const { data } = await axios.put(`/users/${user._id}`, formData);
			data?._id && setSuccess(true);
			dispatch(UpdateSuccess(data));
		} catch (error) {
			console.log(error);
			dispatch(UpdateFailure());
		}
	};

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Update Your Account</span>
					<span className="settingsTitleDelete">Delete Account</span>
				</div>

				<form className="settingsForm" onSubmit={handleUpdateUserSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src={file ? URL.createObjectURL(file) : generatePublicUrl(user?.profilePic)}
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>{" "}
						</label>
						<input
							id="fileInput"
							type="file"
							className="settingsPPInput"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>

					<label>Username</label>
					<input
						type="text"
						placeholder={user?.username}
						name="name"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<label>Email</label>
					<input
						type="email"
						placeholder={user?.email}
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label>Password</label>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button className="settingsSubmitButton" type="submit">
						Update
					</button>
					{success && <span className="successMsg">Profile has been updated successfully...</span>}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;

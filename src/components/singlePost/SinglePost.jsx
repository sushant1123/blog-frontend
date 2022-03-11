import React from "react";
import { Link } from "react-router-dom";

import MyImg from "../../assets/usedImg.jpg";
import "./singlePost.styles.css";

const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img className={MyImg} alt="" />
				<h1 className="singlePostTitle">
					Lorem ipsum dolor
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">
							<Link className="link" to="/posts?username=Sushant">
								Sushant
							</Link>
						</b>
					</span>
					<span className="singlePostDate">1 day ago</span>
				</div>
				<p className="singlePostDescription">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis
					quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
					adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
					doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
					voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
					error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum
					necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
					ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos!
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis
					quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
					adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
					doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
					voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
				</p>
			</div>
		</div>
	);
};

export default SinglePost;

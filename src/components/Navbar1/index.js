import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo/orange.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	const history = useHistory();
	const page = window.location.pathname.substring(1);
	console.log(page);

	const handleHome = () => {
		history.push("/");
	};

	const handleSignIn = () => {
		history.push("/login");
	};

	const handleFeature = () => {
		history.push("/feature");
	};

	const handleAbout = () => {
		history.push("/about");
	};
	return (
		<>
			<nav
				className={`layout ${
					scrollY > 230 ? "layout--orange" : ""
				}`}
			>
				<div className="layout__logo">
					<img
						src={logo}
						onClick={handleHome}
						alt="logo"
						className="layout__img"
					/>

					<input
						type="checkbox"
						className="menu-btn"
						id="menu-btn"
					/>
					<label htmlFor="menu-btn" className="menu-icon">
						<span className="menu-icon__line"></span>
					</label>
					<ul className="layout__list">
						<li onClick={handleFeature}>Feature</li>
						<li onClick={handleAbout}>About</li>
					</ul>
				</div>

				<button
					onClick={handleSignIn}
					className="layout__button"
				>
					Ready To Sweat?
				</button>
			</nav>
		</>
	);
};

export default Navbar;

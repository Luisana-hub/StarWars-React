import React from "react";
import { Link } from "react-router-dom";
import logoStarwars from "../../img/logoStarwars.png";
import { Dropdown } from "./dropdown";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={logoStarwars} />
			</Link>
			<div className="ml-auto">
				<Dropdown />
			</div>
		</nav>
	);
};

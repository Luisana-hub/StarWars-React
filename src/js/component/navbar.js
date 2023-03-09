import React from "react";
import { Link } from "react-router-dom";
import logoStarwars from "../../img/logoStarwars.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<a className="navbar-brand">
				<img src={logoStarwars} className="d-inline-block align-top"/>
				</a>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

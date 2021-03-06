import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src="../../images/logo.svg" alt="logo" width="100" />
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/home"
						>
							Home
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/search"
						>
							Search
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/cart"
						>
							Cart
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/checkout"
						>
							Checkout
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul className="navbar-nav ml-auto">
						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/login"
						>
							Salir
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

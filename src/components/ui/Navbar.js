import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-white">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src="../../images/logo.jpg" alt="logo" width="90" />
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/home"
						>
							TODOS LOS PRODUCTOS
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
					<ul className="navbar-nav ml-auto">
						<NavLink
							activeClassName="active"
							className="nav-item nav-link d-none"
							exact
							to="/login"
						>
							Salir
						</NavLink>
						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/search"
						>
							BUSCAR ALGO
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/cart"
						>
							MI CARRITO
						</NavLink>

						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							exact
							to="/checkout"
						>
							PAGAR
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

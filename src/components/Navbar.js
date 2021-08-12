import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import navlogo from "../image/logo.svg";
import navlogo from "../image/brandlogo.jpg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img
						className="img-fluid"
						src={navlogo}
						alt="React Logo"
						id="navlogo"
					/>
					{console.log(navlogo)}
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

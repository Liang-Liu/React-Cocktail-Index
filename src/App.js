import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
	return (
		<div className="">
			<Router>
				<Navbar />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/about">
						<About />
					</Route>

					<Route path="/cocktail/:id">
						<SingleCocktail />
					</Route>

					<Route path="/:error">
						<Error />
					</Route>
				</Switch>
			</Router>

			<footer className="footer mt-auto py-3 bg-dark">
				<div className="container text-center font-weight-light text-muted">
					Copyright © 2021. Powered by The Cocktail DB
				</div>
			</footer>
		</div>
	);
}

export default App;

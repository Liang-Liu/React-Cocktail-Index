import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useGlobalContextHook } from "../context";
import Loading from "../components/Loading";
import homeImg from "../image/homeimg.jpg";

const Home = () => {
	const { state } = useGlobalContextHook();

	return (
		<div>
			<section
				className=" text-center container-fluid position-relative overflow-hidden py-sm-5 "
				id="homepageHero"
			>
				<div className="row py-lg-5 ">
					<div
						className="img-container position-absolute"
						id="homeImg-container"
					>
						<img className="img-fluid" src={homeImg} alt="homeImage" />
					</div>
					<div className="col-lg-6 col-md-8 mx-auto">
						<h1 className="py-2 py-sm-5" id="hometext">
							Pour Yourself A Drink
						</h1>
						<SearchForm />
					</div>
				</div>
			</section>
			{state.loading ? <Loading /> : <CocktailList />}
		</div>
	);
};

export default Home;

import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const nameCardPropierties = [

		{ title: "my First Webpage", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel.", Image: "https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg" },
		{ title: "my First Webpage", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel.", Image: "https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg" },
		{ title: "my First Webpage", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel.", Image: "https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg" },
		{ title: "my First Webpage", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel.", Image: "https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg" }
	]
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-4 container d-flex justify-content-center w-100">
				{nameCardPropierties.map((element, index) => {
					return (
						<Card title={element.title} paragraph={element.paragraph} Image={element.Image} key={index} />
					);
				})}
			</div>
			<Footer />
		</div>


	);
};

export default Home;
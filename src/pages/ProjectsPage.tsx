import { useContext, useEffect } from "react";
import { CardsContext } from "./Major";
import { useLocation } from "react-router-dom";
import Project from "../components/Project/Project";
import BestProjects from "../components/BestProjects/BestProjects";

const ProjectsPage = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	const cards = useContext(CardsContext);
	const loc = useLocation();
	const state = loc.state
	const { card } = state
	return (
		<>
			<div id="details" className="w-full min-h-screen pt-18 ">
				<Project imgUrl={card.imgUrl} title={card.title} skills={card.details} demoUrl={card.demoUrl} githubUrl={card.githubUrl}
					time={card.time} details={card.details} languages={card.languages} libraries={card.libraries} frameworks={card.frameworks} />
			</div>
			<div className="text-mainText dark:text-white min-h-screen p-5 transition-colors duration-300">
				<BestProjects cards={cards} />
			</div>
		</>
	)
}

export default ProjectsPage

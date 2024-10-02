import { useEffect, useState } from "react";
import Project, { ProjectProps } from "./Project";
import ShowMoreButton from "./ShowMoreButton";

const projectsData: ProjectProps[] = [
	{
		img: {
			url: "/images/easybank-screenshot.png",
			alt: "Easybank website solution screenshot",
		},
		url: "https://stirring-starlight-ece270.netlify.app/",
	},
	{
		img: {
			url: "/images/sunnyside-screenshot.png",
			alt: "Sunnyside website solution screenshot",
		},
		url: "https://jlsoaresramos.github.io/sunnyside/",
	},
	{
		img: {
			url: "/images/todo-screenshot.png",
			alt: "Todo website solution screenshot",
		},
		url: "https://jlsoaresramos.github.io/todo/",
	},
	{
		img: {
			url: "/images/manage-screenshot.png",
			alt: "Manage website solution screenshot",
		},
		url: "https://jlsoaresramos.github.io/manage-landpage/",
	},
	{
		img: {
			url: "/images/product-list-screenshot.png",
			alt: "Product list with cart website solution screenshot",
		},
		url: "https://peaceful-chebakia-a4cbc5.netlify.app/",
	},
];

export default function ProjectsWrapper() {
	const [showMore, setShowMore] = useState(false);
	const [projectsToShow, setProjectsToShow] = useState<ProjectProps[]>([]);

	useEffect(() => {
		if (showMore) {
			setProjectsToShow(projectsData);
			return;
		}
		setProjectsToShow(projectsData.slice(0, 6));
	}, [showMore]);

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
				{projectsToShow.map((project, index) => (
					<Project key={index} img={project.img} url={project.url} />
				))}
			</div>
			{projectsData.length > 6 && (
				<ShowMoreButton onShowMore={() => setShowMore(!showMore)} />
			)}
		</div>
	);
}

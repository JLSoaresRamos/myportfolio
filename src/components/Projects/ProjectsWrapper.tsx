import { useEffect, useState } from "react";
import Project, { ProjectProps } from "./Project";
import ShowMoreButton from "./ShowMoreButton";

const projectsData: ProjectProps[] = [
	{
		title: "Easybank",
		img: {
			url: "/images/easybank-screenshot-tiny.png",
			alt: "Easybank website solution screenshot",
		},
		url: "https://stirring-starlight-ece270.netlify.app/",
	},
	{
		title: "Sunnyside",
		img: {
			url: "/images/sunnyside-screenshot-tiny.png",
			alt: "Sunnyside website solution screenshot",
		},
		url: "https://jlsoaresramos.github.io/sunnyside/",
	},
	{
		title: "Todo",
		img: {
			url: "/images/todo-screenshot-tiny.png",
			alt: "Todo website solution screenshot",
		},
		url: "https://jlsoaresramos.github.io/todo/",
	},
	{
		title: "Manage",
		img: {
			url: "/images/manage-screenshot-tiny.png",
			alt: "Manage website solution screenshot",
		},
		url: "https://jlsoaresramos.github.io/manage-landpage/",
	},
	{
		title: "Cart",
		img: {
			url: "/images/product-list-screenshot-tiny.png",
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
					<Project
						key={index}
						title={project.title}
						img={project.img}
						url={project.url}
					/>
				))}
			</div>
			{projectsData.length > 6 && (
				<ShowMoreButton onShowMore={() => setShowMore(!showMore)} />
			)}
		</div>
	);
}

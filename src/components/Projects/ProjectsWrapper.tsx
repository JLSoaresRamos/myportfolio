import Project from "./Project";

export default function ProjectsWrapper() {
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
			<Project
				img={{
					url: "/images/easybank-screenshot.png",
					alt: "",
				}}
				url="https://stirring-starlight-ece270.netlify.app/"
			/>
			<Project
				img={{
					url: "/images/easybank-screenshot.png",
					alt: "",
				}}
				url="https://stirring-starlight-ece270.netlify.app/"
			/>
			<Project
				img={{
					url: "/images/easybank-screenshot.png",
					alt: "",
				}}
				url="https://stirring-starlight-ece270.netlify.app/"
			/>
		</div>
	);
}

export type ProjectProps = {
	title: string;
	url: string;
	img: {
		url: string;
		alt: string;
	};
};

export default function Project({ img, url, title }: ProjectProps) {
	return (
		<a href={url} target="_blank" className="relative group">
			<div className="relative overflow-hidden">
				<img
					loading="lazy"
					src={img.url}
					alt={img.alt}
					className="border border-primary-purple rounded-lg transform transition-transform duration-300"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

				<div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<h2 className="text-white text-lg font-bold">{title}</h2>
				</div>
			</div>
		</a>
	);
}

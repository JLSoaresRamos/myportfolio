export type ProjectProps = {
	url: string;
	img: {
		url: string;
		alt: string;
	};
};

export default function Project({ img, url }: ProjectProps) {
	return (
		<a href={url} target="_blank">
			<img
				src={img.url}
				alt={img.alt}
				className="border border-primary-purple rounded-lg transform hover:scale-105 transition-all"
			/>
		</a>
	);
}

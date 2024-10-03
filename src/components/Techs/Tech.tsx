type TechProps = {
	icon: {
		url: string;
		alt: string;
	};
};

export default function Tech({ icon }: TechProps) {
	return (
		<img
			loading="lazy"
			src={icon.url}
			alt={icon.alt}
			className="bg-primary-dark-purple rounded-lg border border-primary-purple p-4 h-28 w-28"
		/>
	);
}

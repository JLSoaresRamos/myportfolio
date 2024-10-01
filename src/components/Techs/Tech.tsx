type TechProps = {
	icon: {
		url: string;
		alt: string;
	};
};

export default function Tech({ icon }: TechProps) {
	return (
		<img
			src={icon.url}
			alt={icon.alt}
			className="bg-primary-dark-purple rounded-lg border border-primary-purple p-4"
		/>
	);
}

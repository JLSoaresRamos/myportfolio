import Tech from "./Tech";

export default function TechsWrapper() {
	return (
		<div className="flex gap-4">
			<Tech
				icon={{
					url: "/images/tailwindcss-icon.svg",
					alt: "Tailwind Icon",
				}}
			/>
			<Tech
				icon={{
					url: "/images/react-icon.svg",
					alt: "React Icon",
				}}
			/>
			<Tech
				icon={{
					url: "/images/js-icon.svg",
					alt: "JavaScript Icon",
				}}
			/>
			<Tech
				icon={{
					url: "/images/html-5-icon.svg",
					alt: "HTML5 Icon",
				}}
			/>
			<Tech
				icon={{
					url: "/images/css-3-icon.svg",
					alt: "CSS3 Icon",
				}}
			/>
			<Tech
				icon={{
					url: "/images/sass-icon.svg",
					alt: "SASS Icon",
				}}
			/>
		</div>
	);
}

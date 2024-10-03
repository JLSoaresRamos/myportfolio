import Tech from "./Tech";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	laptop: {
		breakpoint: { max: 1440, min: 1024 },
		items: 7,
	},
	tablet: {
		breakpoint: { max: 768, min: 375 },
		items: 5.5,
	},
	"mobile-l": {
		breakpoint: { max: 425, min: 375 },
		items: 3,
	},
	"mobile-m": {
		breakpoint: { max: 375, min: 320 },
		items: 2.5,
	},
	mobile: {
		breakpoint: { max: 320, min: 0 },
		items: 1.5,
	},
};

export default function TechsWrapper() {
	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			removeArrowOnDeviceType={[
				"tablet",
				"mobile",
				"mobile-l",
				"mobile-m",
				"laptop",
				"desktop",
			]}
		>
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
			<Tech
				icon={{
					url: "/images/typescript-icon.svg",
					alt: "Typescript Icon",
				}}
			/>
		</Carousel>
	);
}

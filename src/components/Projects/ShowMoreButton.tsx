import { FaArrowDown } from "react-icons/fa";

type ShowMoreButtonProps = {
	onShowMore: () => void;
};

export default function ShowMoreButton({ onShowMore }: ShowMoreButtonProps) {
	return (
		<button
			onClick={() => onShowMore()}
			className="bg-primary-blue rounded-full p-4"
			aria-label="Show more projects"
		>
			<FaArrowDown size={24} />
		</button>
	);
}

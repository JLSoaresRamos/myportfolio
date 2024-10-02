import CVButton from "./CVButton";
import SocialMedia from "./SocialMedia";

export default function GroupButtons() {
	return (
		<div className="flex flex-col md:items-start items-center">
			<div className="flex flex-col items-center gap-8 md:gap-4 ">
				<SocialMedia />
				<CVButton />
			</div>
		</div>
	);
}

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function SocialMedia() {
	return (
		<div className="flex gap-1 text-5xl justify-between w-full">
			<a href="#">
				<FaLinkedin className="hover:text-primary-red" />
			</a>
			<a href="#">
				<FaGithubSquare className="hover:text-primary-red" />
			</a>
			<a href="#">
				<FaWhatsappSquare className="hover:text-primary-red" />
			</a>
		</div>
	);
}

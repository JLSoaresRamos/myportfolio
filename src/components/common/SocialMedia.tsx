import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function SocialMedia() {
	return (
		<div className="flex gap-1 text-5xl w-full justify-between">
			<a href="https://www.linkedin.com/in/jlramossoares/" target="_blank">
				<FaLinkedin className="hover:text-primary-blue" />
			</a>
			<a href="https://github.com/JLSoaresRamos" target="_blank">
				<FaGithubSquare className="hover:text-primary-blue" />
			</a>
			<a href="https://wa.me/5515991658125" target="_blank">
				<FaWhatsappSquare className="hover:text-primary-blue" />
			</a>
		</div>
	);
}

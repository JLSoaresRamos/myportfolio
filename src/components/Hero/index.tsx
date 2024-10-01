import Profile from "./Profile";
import SocialMedia from "../common/SocialMedia";
import CVButton from "../common/CVButton";

export default function Hero() {
	return (
		<section className="flex flex-col gap-4 justify-center md:items-start items-center">
			<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
				<Profile />
				<h1 className="font-bold text-center text-xl md:text-left">
					Olá,
					<br />
					Sou <span className="text-primary-red">João Lucas</span>
					<br />
					<span className="text-primary-purple">Desenvolvedor Front End</span>
				</h1>
			</div>
			<div className="flex justify-center flex-col items-center gap-4">
				<SocialMedia />
				<CVButton />
			</div>
		</section>
	);
}

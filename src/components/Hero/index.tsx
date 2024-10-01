import Profile from "./Profile";
import SocialMedia from "../common/SocialMedia";
import CVButton from "../common/CVButton";

export default function Hero() {
	return (
		<section className="flex flex-col gap-4 justify-center md:items-start items-center">
			<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
				<Profile />
				<div className="flex flex-col align-baseline">
					<div>
						<h1 className="font-bold text-center text-xl md:text-left md:text-4xl">
							<br />
							Olá,
							<br />
							Sou <span className="text-primary-red">João Lucas</span>
							<br />
							<span className="text-primary-purple">
								Desenvolvedor Front End
							</span>
						</h1>
					</div>
					<div className="gap-4 flex flex-col md:items-start items-center">
						<SocialMedia />
						<CVButton />
					</div>
				</div>
			</div>
		</section>
	);
}

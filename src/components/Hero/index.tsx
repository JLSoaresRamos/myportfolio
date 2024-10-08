import Profile from "./Profile";
import GroupButtons from "../common/GroupButtons";

export default function Hero() {
	return (
		<section className="flex flex-col justify-center md:items-start items-center">
			<div className="flex flex-col md:gap-8 md:flex-row justify-center items-center">
				<Profile />
				<div className="flex flex-col gap-8 md:gap-4 align-baseline">
					<div>
						<h1 className="font-bold text-center relative text-2xl md:text-left md:text-5xl">
							<img
								src="/images/waving-hand.svg"
								className="hidden md:block w-8 h-8 absolute top-0 animate-wave"
								alt="Mão abanando para direita e esqueda"
							/>
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
					<GroupButtons />
				</div>
			</div>
		</section>
	);
}

import { twMerge } from "tailwind-merge";

type LogoProps = {
	className?: string;
};

const Logo = ({ className = "" }: LogoProps) => {
	const style = twMerge(className, "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12");

	return <img src="/images/logo.svg" alt="JL logo" className={style} />;
};

export default Logo;

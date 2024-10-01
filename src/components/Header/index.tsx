import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import Logo from "../common/Logo";

import MobileFloatNav from "./MobileFloatNav";
import Nav from "./Nav";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(!isOpen);
	}

	return (
		<header className="flex items-center justify-between pt-4">
			<Logo />
			<button
				className="md:hidden"
				onClick={() => toggle()}
				aria-label="Abrir menu"
			>
				{isOpen ? (
					<IoMdClose className="w-6 h-10 cursor-pointer text-2xl" />
				) : (
					<GiHamburgerMenu className="w-6 h-10 cursor-pointer text-2xl" />
				)}
			</button>
			<Nav />
			<MobileFloatNav isOpen={isOpen} />
		</header>
	);
}

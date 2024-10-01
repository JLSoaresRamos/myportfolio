import { GiHamburgerMenu } from "react-icons/gi";
// import pxToRem from "../utils/pxToRem";
import { useEffect, useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		if (window.innerWidth >= 768) {
			setIsOpen(false);
		}
	}, []);

	return (
		<header className="flex items-center justify-between p-4">
			<img
				src="/images/logo.svg"
				alt="JL logo"
				className="w-6 h-10 md:w-8 md:h-8 lg:w-9 lg:h-9"
			/>

			{/* Botão Hamburguer visível em telas pequenas */}
			<div className="md:hidden">
				<GiHamburgerMenu
					className="w-6 h-10 cursor-pointer text-2xl"
					onClick={() => toggle()}
				/>
			</div>

			{/* Links de navegação */}
			<nav
				className={`absolute right-4 top-16 bg-[#2E2532] border-2 border-purple-500 p-4 rounded-lg shadow-lg transition-all duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div className={`flex flex-col items-start space-y-4`}>
					<a href="#" className="text-white text-lg hover:text-gray-400">
						Contatos
					</a>
					<a href="#" className="text-white text-lg hover:text-gray-400">
						Projetos
					</a>
					<a href="#" className="text-white text-lg hover:text-gray-400">
						MVV
					</a>
					<a href="#" className="text-white text-lg hover:text-gray-400">
						Tecnologias
					</a>
				</div>
			</nav>

			{/* Opções visíveis em telas maiores */}
			<div className={`hidden md:flex md:space-x-8`}>
				<a href="#" className="text-white text-lg hover:text-gray-400">
					Contatos
				</a>
				<a href="#" className="text-white text-lg hover:text-gray-400">
					Projetos
				</a>
				<a href="#" className="text-white text-lg hover:text-gray-400">
					MVV
				</a>
				<a href="#" className="text-white text-lg hover:text-gray-400">
					Tecnologias
				</a>
			</div>
		</header>
	);
}

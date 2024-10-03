type MobileNavProps = {
	isOpen: boolean;
};

export default function MobileFloatNav({ isOpen }: MobileNavProps) {
	return (
		<nav
			className={`absolute left-[50%] translate-x-[-50%] flex justify-center top-16 w-72 bg-[#2E2532] border-2 border-purple-500 p-4 rounded-lg shadow-lg transition-all duration-300 ${
				isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<div className="flex flex-col space-y-4 items-center">
				<a href="#contato" className="text-white text-lg hover:text-gray-400">
					Contato
				</a>
				<a href="#projetos" className="text-white text-lg hover:text-gray-400">
					Projetos
				</a>
				<a href="#mvv" className="text-white text-lg hover:text-gray-400">
					MVV
				</a>
				<a
					href="#tecnologias"
					className="text-white text-lg hover:text-gray-400"
				>
					Tecnologias
				</a>
			</div>
		</nav>
	);
}

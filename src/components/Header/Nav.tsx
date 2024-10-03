import Link from "./Link";

export default function Nav() {
	return (
		<nav className="hidden md:block">
			<ul className="flex space-x-8">
				<li>
					<Link text="Contatos" href="#contato" />
				</li>
				<li>
					<Link text="Projetos" href="#projetos" />
				</li>
				<li>
					<Link text="MVV" href="#mvv" />
				</li>
				<li>
					<Link text="Tecnologias" href="#tecnologias" />
				</li>
			</ul>
		</nav>
	);
}

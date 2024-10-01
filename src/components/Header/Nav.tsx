import Link from "./Link";

export default function Nav() {
	return (
		<nav className="hidden md:block">
			<ul className="flex space-x-8">
				<li>
					<Link text="Contatos" href="#" />
				</li>
				<li>
					<Link text="Projetos" href="#" />
				</li>
				<li>
					<Link text="MVV" href="#" />
				</li>
				<li>
					<Link text="Tecnologias" href="#" />
				</li>
			</ul>
		</nav>
	);
}

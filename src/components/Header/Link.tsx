type LinkProps = {
	text: string;
	href: string;
};

const Link = ({ href, text }: LinkProps) => (
	<a href={href} className="text-white text-lg hover:text-gray-400">
		{text}
	</a>
);

export default Link;

type TitleProps = {
	children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => (
	<h2 className="font-bold text-3xl mb-4">{children}</h2>
);

export default Title;

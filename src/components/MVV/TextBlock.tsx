type TextBlockProps = {
	title: string;
	children: React.ReactNode;
	className?: string;
};

export default function TextBlock({
	title,
	children,
	className,
}: TextBlockProps) {
	return (
		<div className={className}>
			<h2 className="font-bold text-2xl text-primary-blue">{title}</h2>
			<p className="text-lg">{children}</p>
		</div>
	);
}

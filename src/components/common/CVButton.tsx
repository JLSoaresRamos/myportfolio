import { HiCloudDownload } from "react-icons/hi";

export default function CVButton() {
	return (
		<a
			href="/documents/curriculo.pdf"
			download="currículo.pdf"
			className="bg-button-background px-12 py-1 rounded-lg flex flex-col justify-center items-center"
		>
			Baixar CV
			<HiCloudDownload size={32} />
		</a>
	);
}

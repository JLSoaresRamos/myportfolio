import ContactForm from "./ContactForm";
import Logo from "../common/Logo";
import GroupButtons from "../common/GroupButtons";

export default function Footer() {
	return (
		<footer id="contato" className="bg-primary-black relative p-8 lg:p-12">
			<div className="flex flex-col gap-4 md:flex-row">
				<ContactForm />
				<div className="mt-auto md:mb-[5.5rem]">
					<GroupButtons />
				</div>
				<Logo className="mx-auto md:absolute md:bottom-10 md:right-10" />
			</div>
		</footer>
	);
}

const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { successMessage, errorMessage } from "../common/toast";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import SubmitButton from "./SubmitButton";

type EmailDataProps = {
	name: string;
	email: string;
	subject: string;
};

export default function ContactForm() {
	const [emailData, setEmailData] = useState<EmailDataProps>({
		name: "",
		email: "",
		subject: "",
	});
	const [isSending, setIsSending] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setIsSending(true);

		const templateParams = {
			user_name: emailData.name,
			user_email: emailData.email,
			message: emailData.subject,
			contact_number: uuidv4().split("-")[0],
		};

		try {
			const response = await emailjs.send(
				"contact_service",
				"template_zijsoxh",
				templateParams,
				EMAILJS_KEY
			);
			console.log("Email enviado com sucesso!", response.status, response.text);
			successMessage();
		} catch (error) {
			console.error("Erro ao enviar email:", error);
			errorMessage();
		} finally {
			setIsSending(false);
		}
	}

	return (
		<form className="space-y-4 max-w-96" onSubmit={handleSubmit}>
			<div className="flex flex-col">
				<label htmlFor="name">Nome</label>
				<input
					onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
					type="text"
					name="name"
					id="name"
					className="bg-primary-dark-purple border border-primary-purple rounded-lg p-2"
					required
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) =>
						setEmailData({ ...emailData, email: e.target.value })
					}
					type="email"
					name="email"
					id="email"
					className="bg-primary-dark-purple border border-primary-purple rounded-lg p-2"
					required
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="subject">Assunto</label>
				<textarea
					onChange={(e) =>
						setEmailData({ ...emailData, subject: e.target.value })
					}
					name="subject"
					id="subject"
					rows={10}
					cols={50}
					className="bg-primary-dark-purple border p-2 border-primary-purple rounded-lg"
					required
				></textarea>
			</div>
			<SubmitButton isLoading={isSending} />
			<ToastContainer />
		</form>
	);
}

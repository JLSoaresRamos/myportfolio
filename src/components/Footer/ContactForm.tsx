export default function ContactForm() {
	return (
		<form className="space-y-4 max-w-96">
			<div className="flex flex-col">
				<label htmlFor="name">Nome</label>
				<input
					type="text"
					name="name"
					id="name"
					className="bg-primary-dark-purple border border-primary-purple rounded-lg p-2"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					id="email"
					className="bg-primary-dark-purple border border-primary-purple rounded-lg p-2"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="subject">Assunto</label>
				<textarea
					name="subject"
					id="subject"
					rows={10}
					cols={50}
					className="bg-primary-dark-purple border p-2 border-primary-purple rounded-lg"
				></textarea>
			</div>
		</form>
	);
}

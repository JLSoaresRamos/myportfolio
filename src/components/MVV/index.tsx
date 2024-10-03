import TextBlock from "./TextBlock";

export default function MVV() {
	return (
		<section className="relative grid space-y-4 md:space-y-0 md:grid-cols-6 md:grid-rows-3 gap-10">
			{/* Missão */}
			<TextBlock title="Missão" className="md:col-start-1 md:col-end-3">
				Minha missão é combinar código limpo com design intuitivo para criar
				websites que não apenas funcionem, mas também encantem os usuários.
			</TextBlock>

			{/* Visão */}
			<TextBlock
				title="Visão"
				className="md:col-start-3 md:col-end-5 md:row-start-2"
			>
				Minha visão é me tornar uma referência em desenvolvimento front-end,
				entregando projetos que resolvam problemas de hoje e inspirem soluções
				inovadoras para o futuro da web.
			</TextBlock>

			{/* Valores */}
			<TextBlock
				title="Valores"
				className="md:col-start-5 md:col-end-7 md:row-start-3"
			>
				Meus valores se baseiam na inovação constante, qualidade em cada detalhe
				e transparência, sempre mantendo uma colaboração ativa e próxima com os
				clientes.
			</TextBlock>

			{/* Imagem do astronauta */}
			<img
				loading="lazy"
				src="/images/astronaut.svg"
				alt="Astronauta andando na lua e o planeta terra ao horizonte"
				className="hidden md:block absolute top-0 right-0 md:right-10 w-80"
			/>

			{/* Imagem do planeta */}
			<img
				loading="lazy"
				src="/images/planet.svg"
				alt="Planeta com um telescópio em cima"
				className="hidden md:block absolute bottom-0 -left-7 w-80"
			/>
		</section>
	);
}

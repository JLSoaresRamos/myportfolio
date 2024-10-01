import Header from "./components/Header";
import Hero from "./components/Hero";
import MVV from "./components/MVV";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
	return (
		<main>
			<div className="px-8 lg:px-12 overflow-x-hidden">
				<Header />
				<div className="space-y-28 pb-16">
					<Hero />
					<MVV />
					<Techs />
					<Projects />
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default App;

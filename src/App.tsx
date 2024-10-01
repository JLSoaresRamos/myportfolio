import Header from "./components/Header";
import Hero from "./components/Hero";
import MVV from "./components/MVV";

function App() {
	return (
		<main className="px-8 lg:px-12 overflow-x-hidden">
			<Header />
			<div className="space-y-28">
				<Hero />
				<MVV />
			</div>
		</main>
	);
}

export default App;

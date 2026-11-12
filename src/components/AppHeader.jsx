import Logo from "./Logo";
// import linksObjects from "../data/header.links" // <--- se non avete alias "@" configurato
import linksObjects from "@/data/header.links"

function AppHeader() {

	const links = linksObjects.map(elemento => {

		let classi = "";

		if (elemento.isActive) {
			classi = "active";
		}

		// const classi = elemento.isActive && "active";
		// const classi = elemento.isActive ? "active" : "";

		return <li key={elemento.id}><a href={elemento.url} className={classi}>{elemento.text}</a></li>
	});

	return (
		<header>
			<Logo slogan="titolone" sottotesto="descrizione in corsivo" />
			<nav>
				<ul>
					{links}
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;
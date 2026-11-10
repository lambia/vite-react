import Logo from "./Logo";
// import linksObjects from "../data/header.links" // <--- se non avete alias "@" configurato
import linksObjects from "@/data/header.links"

function AppHeader() {

	const links = linksObjects.map(elemento => {
		return <li key={elemento.id}><a href={elemento.url}>{elemento.text}</a></li>
	});

	return (
		<header>
			<Logo />
			<nav>
				<ul>
					{links}
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;
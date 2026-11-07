import Logo from "./Logo";

function AppHeader() {

	const linksLabels = [
		"Home",
		"Prodotti",
		"Chi Siamo",
		"Contatti",
	];

	const links = linksLabels.map((elemento, i) => {
		return <li key={i}><a href="#">{elemento}</a></li>
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

/*
<li><a href="#">Home</a></li>
<li><a href="#">Prodotti</a></li>
<li><a href="#">Chi Siamo</a></li>
<li><a href="#">Contatti</a></li>
*/

export default AppHeader;
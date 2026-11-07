function AppHeader() {

	const slogan = "Molisana, pasta sana!";

	const stile = {
		// "background-color": "crimson",
		// backgroundColor: "crimson",
		padding: "1rem"
	};

	return (
		<header>
			<figure>
				<img src="/logo.png" alt="Logo" />
				<p className="prova" style={stile}>{slogan}</p>
			</figure>
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
						<a href="#">Prodotti</a>
						<a href="#">Chi Siamo</a>
						<a href="#">Contatti</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;
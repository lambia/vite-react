function AppHeader() {

	const payoff = "Molisana, pasta sana!";

	return (
		<header>
			<figure>
				<img src="/logo.png" alt="Logo" />
				<p>{payoff}</p>
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
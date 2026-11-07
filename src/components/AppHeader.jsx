import Logo from "./Logo";

function AppHeader() {
	return (
		<header>
			<Logo />
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
import Logo from "./Logo";

function AppHeader() {

	return (
		<header>
			<Logo />
			<nav>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Prodotti</a></li>
					<li><a href="#">Chi Siamo</a></li>
					<li><a href="#">Contatti</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;
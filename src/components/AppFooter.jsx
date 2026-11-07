import Logo from "./Logo";

function AppFooter() {

	const pastificioLinksObj = [
		{ label: "Il Pastificio", href: "#" },
		{ label: "Grano", href: "#" },
		{ label: "Filiera", href: "#" },
		{ label: "100 anni di pasta", href: "#" },
		{ label: "Sartoria della pasta", href: "#" },
	];

	const productsLinksObj = [
		{ label: "Le classiche", href: "#" },
		{ label: "Le Integrali", href: "#" },
		{ label: "Le Speciali", href: "#" },
		{ label: "Le Biologiche", href: "#" },
		{ label: "Le Gluten-free", href: "#" },
	];

	const pastificioLinks = pastificioLinksObj.map((link, index) => (
		<li key={index}>
			<a href={link.href}>{link.label}</a>
		</li>
	));

	const productsLinks = productsLinksObj.map((link, index) => (
		<li key={index}>
			<a href={link.href}>{link.label}</a>
		</li>
	));

	return (
		<footer className="container">
			<nav className="footer-nav">
				<div className="footer-col">
					<Logo />
				</div>
				<div className="footer-col">
					<div>
						<h4>Pastificio</h4>
						<ul>{pastificioLinks}</ul>
					</div>
				</div>
				<div className="footer-col">
					<div>
						<h4>Prodotti</h4>
						<ul>{productsLinks}</ul>
					</div>
				</div>
			</nav>
		</footer>
	)
}

export default AppFooter;
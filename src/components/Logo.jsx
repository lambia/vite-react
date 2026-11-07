function Logo() {

	const slogan = "Molisana, pasta sana!";

	const stile = {
		// "background-color": "crimson",
		// backgroundColor: "crimson",
		padding: "1rem"
	};

	return (
		<figure>
			<img src="/logo.png" alt="Logo" />
			<p className="prova" style={stile}>{slogan}</p>
		</figure>
	)
}

export default Logo;
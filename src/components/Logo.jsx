//il componente richiede una props "slogan"

function Logo(props) {

	const stile = {
		// "background-color": "crimson",
		// backgroundColor: "crimson",
		padding: "1rem"
	};

	const slogan = props.slogan;
	const sottotesto = props.sottotesto;

	return (
		<figure>
			<img src="/logo.png" alt="Logo" />
			<p className="prova" style={stile}>{slogan}</p>
			<p>{sottotesto}</p>
		</figure>
	)
}

export default Logo;
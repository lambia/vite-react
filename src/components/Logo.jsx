//il componente richiede una props "slogan"

function Logo(props) {

	const stile = {
		// "background-color": "crimson",
		// backgroundColor: "crimson",
		padding: "1rem"
	};

	const slogan = props.slogan;
	const sottotesto = props.sottotesto;

	// const condizione = false;

	const messaggioAlternativo = "Testo mancante"

	return (
		<figure>
			<img src="/logo.png" alt="Logo" />
			<p className="prova" style={stile}>{slogan}</p>

			{/* {condizione ? <div>si</div> : <div>no</div>} */}

			{/* {sottotesto ? <p className="sottotesto">{sottotesto}</p> : <p className="sottotesto">{messaggioAlternativo}</p>} */}

			<p className="sottotesto">
				{/* {sottotesto ? sottotesto : messaggioAlternativo} */}
				{sottotesto || messaggioAlternativo}
			</p>

		</figure>
	)
}

export default Logo;
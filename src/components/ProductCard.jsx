function ProductCard({ nome, img, type, time, cosaFare }) {

	// console.log("Prodotto ricevuto: ");

	// const nome = props.nome; //stringa
	// const img = props.img; //stringa
	// const type = props.type;
	// const time = props.time;

	// const { nome, img, type, time } = props;

	return <div className="prod-card">
		<img src={img} alt={nome} />
		<h3>{nome}</h3>
		{(type && time) ? <p>Pasta {type} - Cottura {time} minuti</p> : <p>Non ci sono informazioni disponibili</p>}
	</div>
}

export default ProductCard;
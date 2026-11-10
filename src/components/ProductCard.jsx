function ProductCard(props) {

	// console.log("Prodotto ricevuto: ", props.item);

	const nome = props.nome; //stringa
	const img = props.img; //stringa

	return <div className="prod-card">
		<img src={img} alt={nome} />
		<h3>{nome}</h3>
	</div>
}

export default ProductCard;
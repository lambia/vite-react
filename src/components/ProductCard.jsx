function ProductCard(props) {

	// console.log("Prodotto ricevuto: ", props.item);

	const prodotto = props.item; //item è {} con title e src

	return <div className="prod-card">
		<img src={prodotto.src} alt={prodotto.title} />
		<h3>{prodotto.title}</h3>
	</div>
}

export default ProductCard;
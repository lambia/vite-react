import { useState } from "react";

function ProductCard({ nome, img, type, time }) {

	// console.log("Prodotto ricevuto: ");

	// const nome = props.nome; //stringa
	// const img = props.img; //stringa
	// const type = props.type;
	// const time = props.time;

	// const { nome, img, type, time } = props;

	const [isOpen, setIsOpen] = useState(false);

	// let descrizione = "Dati non disponibili";
	// if (type && time) {
	// 	descrizione = `Pasta ${type} - Cottura ${time} minuti`;
	// }

	const descrizione = (type && time) ? `Pasta ${type} - Cottura ${time} minuti` : "Dati non disponibili";

	function expandCard() {
		// if (isOpen) {
		// 	setIsOpen(false);
		// } else {
		// 	setIsOpen(true);
		// }

		setIsOpen(!isOpen);
	}

	return <div className="prod-card">
		<img onClick={expandCard} src={img} alt={nome} />
		<h3>{nome}</h3>
		{isOpen ? <p>{descrizione}</p> : null}
	</div>
}

export default ProductCard;
import React from "react";

const Card = (card) => {

	React.useEffect(() => { console.log(card) }, []);
	return (
		<li>
			<h1>
				{card.name || "name"} {card.surname || "surname"}
			</h1>
			<div>
				<p>
					{card.validUntil || "valid until"}, {card.cardNumber || "number"}
				</p>
			</div>
		</li>
	);
};

export default Card;

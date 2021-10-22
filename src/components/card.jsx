import React from "react";

const Card = (card) => {

	React.useEffect(() => { console.log(card) }, []);
	return (
		<li>
			<h1>
				{card.name} {card.surname}
			</h1>
			<div>
				<p>
					{card.validUntil}, {card.cardNumber}
				</p>
			</div>
		</li>
	);
};

export default Card;

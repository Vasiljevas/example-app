import React from "react";

const Card = (card) => {
  return (
    <div>
      <h1>
        {card.name} {card.surname}
      </h1>
      <div>
        <p>
          {card.validUntil}, {card.cardNumber}
        </p>
      </div>
    </div>
  );
};

export default Card;

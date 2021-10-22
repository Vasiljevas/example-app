import { useEffect, useState } from "react";
import Card from "./card";
import { getAll } from "../services/cards";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const getAllCards = async () => {
            try {
                const newCards = await getAll();
                console.log(newCards);
                setCards(newCards);
            } catch (err) {
                alert(err);
            }
        };
        getAllCards();
    }, []);

    return <ul>{cards && cards.length > 0 ? (
        cards.map((c) => <Card key={c.id} card={c} />)
    ) : (
        <li>no cards found</li>
    )}</ul>
}

export default Cards;
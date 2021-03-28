import { useState } from "react";
import { Card } from "./Card";

export const CardList = () => {
  const [cards, setCards] = useState([]);
  const addCard = () => {
    const newCardText = Math.random();
    const newCardId = Math.random();
    const newCard = {
      newCardText,
      newCardId,
    };
    setCards([...cards, newCard]);
  };

  const moveCard = (dragIndex, oldIndex) => {
    const newItems = [...cards];
    const [removed] = newItems.splice(oldIndex, 1);
    newItems.splice(dragIndex, 0, removed);
    setCards(newItems);
  };

  return (
    <>
      <button onClick={addCard}>add card</button>
      {cards.map((card, i) => (
        <Card
          key={card.newCardId}
          index={i}
          text={card.newCardText}
          moveCard={moveCard}
        />
      ))}
    </>
  );
};

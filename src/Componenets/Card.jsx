import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const style = {
  width: "60%",
  border: "1px solid gray",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
  margin: "auto",
  marginBottom: "1rem",
};

export const ItemTypes = {
  CARD: "card",
};

export const Card = ({ text, index, moveCard }) => {
  const dragRef = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item) {
      const dragIndex = item.index;
      const oldIndex = index;
      if (dragIndex === oldIndex) {
        return;
      }
      moveCard(dragIndex, oldIndex);
      item.index = oldIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(dragRef));

  return (
    <div ref={dragRef} style={{ ...style, opacity }}>
      {text}
    </div>
  );
};

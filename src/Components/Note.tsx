import { useState, type FC, type MouseEvent } from "react";
import type { BoardObject } from "../shared-types";

import "../css/note.scss";

type Props = {
  object: BoardObject;
};

export const Note: FC<Props> = ({ object }) => {
  const [isSelected, setIsSelected] = useState(0);
  const [x, setX] = useState(object.x);
  const [y, setY] = useState(object.y);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const onDragStart = (event: MouseEvent<HTMLElement>) => {
    const elementRect = event.currentTarget.getBoundingClientRect();
    const newX = event.clientX - elementRect.left;
    const newY = event.clientY - elementRect.top;

    console.log(event.currentTarget.clientTop);

    setOffsetX(newX);
    setOffsetY(newY);
  };

  const onDragEnd = (event: MouseEvent<HTMLElement>) => {
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    setX(newX);
    setY(newY);
    //Notify position change
  };

  return (
    <div
      className="note"
      style={{
        left: x,
        top: y,
      }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={() => setIsSelected((s) => s + 1)}
      onMouseLeave={() => setIsSelected(0)}
    >
      <div // may need to change this
        dangerouslySetInnerHTML={{ __html: object.innerHTML }}
        contentEditable={isSelected > 0 ? true : false}
        className="note__body"
      ></div>
    </div>
  );
};

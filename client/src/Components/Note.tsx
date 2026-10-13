import { useState, type FC, type MouseEvent } from "react";
import type { BoardObject } from "../shared-types";

import "../css/note.scss";

type Props = {
  id: string;
  object: BoardObject;
  setCurrentNote: React.Dispatch<React.SetStateAction<string>>;
};

export const Note: FC<Props> = ({ id, object, setCurrentNote }) => {
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

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    setCurrentNote(id);
    setIsSelected((s) => s + 1);
  };

  const onMouseLeave = () => {
    setIsSelected(0);
  };

  return (
    <div
      id={id}
      className={`note ${object.type == "IMAGE" ? `note--transparent` : ``}`}
      style={{
        left: x,
        top: y,
      }}
      draggable={isSelected === 0}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
    >
      <div // may need to change this
        id={`${id}__body`}
        dangerouslySetInnerHTML={{ __html: object.innerHTML }}
        contentEditable={isSelected > 0 && !object.static ? true : false}
        className="note__body"
      ></div>
    </div>
  );
};

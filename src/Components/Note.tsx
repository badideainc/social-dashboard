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

  const onDragEnd = (event: MouseEvent<HTMLElement>) => {
    setX(event.clientX);
    setY(event.clientY);

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
      onDragEnd={onDragEnd}
      onClick={() => setIsSelected((s) => s + 1)}
      onMouseLeave={() => setIsSelected(0)}
    >
      <div // may need to change this
        dangerouslySetInnerHTML={{ __html: object.innerHTML }}
        contentEditable={isSelected > 1 ? true : false}
        className="note__body"
      ></div>
    </div>
  );
};

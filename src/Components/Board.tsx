import { useState, type MouseEvent } from "react";
import { type BoardObject } from "../shared-types";

import "../css/board.scss";

export const Board = () => {
  const [boardState, setBoardState] = useState<BoardObject>({});

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    const objID = crypto.randomUUID();

    setBoardState((b) => ({
      ...b,
      [objID]: {
        x: event.clientX,
        y: event.clientY,
        innerHTML: "",
      },
    }));
  };

  return (
    <div className="board">
      <div className="board__toolbar"></div>
      <div className="board__body" onClick={handleOnClick}>
        {Object.keys(boardState).map((o) => {
          return (
            <div
              className="note"
              // may need to change this
              dangerouslySetInnerHTML={{ __html: boardState[o].innerHTML }}
            />
          );
        })}
      </div>
    </div>
  );
};

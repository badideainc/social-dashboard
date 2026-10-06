import { useState, type MouseEvent } from "react";
import { type BoardState } from "../shared-types";

import "../css/board.scss";
import { Note } from "./Note";

export const Board = () => {
  const [boardState, setBoardState] = useState<BoardState>({});
  const [expectPlace, setExpectPlace] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    if (!expectPlace) return;
    setExpectPlace(false);

    const objID = crypto.randomUUID();

    setBoardState((b) => ({
      ...b,
      [objID]: {
        object: {
          x: event.clientX,
          y: event.clientY,
          innerHTML: "",
        },
      },
    }));
  };

  return (
    <div className="board">
      <div className="board__toolbar"></div>
      <button onClick={() => setExpectPlace(true)}>+</button>
      <div className="board__body" onClick={handleOnClick}>
        {Object.keys(boardState).map((o) => {
          return <Note key={o} object={boardState[o].object} />;
        })}
      </div>
    </div>
  );
};

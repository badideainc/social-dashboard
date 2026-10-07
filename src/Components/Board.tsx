import { useState, type FC, type MouseEvent } from "react";
import { type BoardObjectStates, type BoardState } from "../shared-types";

import "../css/board.scss";
import { Note } from "./Note";

export type Props = {
  initState: BoardState;
};

export const Board: FC<Props> = ({ initState }) => {
  const [boardObjects, setBoardObjects] = useState<BoardObjectStates>(
    initState.objects,
  );
  const [expectPlace, setExpectPlace] = useState(false);
  const [toolbarOpen, setToolbarOpen] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    if (!expectPlace) return;
    setExpectPlace(false);

    const objID = crypto.randomUUID();

    setBoardObjects((b) => ({
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
      <div className="board__toolbar">
        <button onClick={() => setToolbarOpen(!toolbarOpen)}>+</button>
        <div
          className={`toolbar ${toolbarOpen ? `toolbar--open` : `toolbar--closed`}`}
        >
          <button onClick={() => setExpectPlace(true)}>T</button>
        </div>
      </div>
      <div className="board__body" onClick={handleOnClick}>
        {Object.keys(boardObjects).map((o) => {
          return <Note key={o} object={boardObjects[o].object} />;
        })}
      </div>
    </div>
  );
};

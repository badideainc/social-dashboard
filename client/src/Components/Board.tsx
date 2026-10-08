import { useState, type FC, type MouseEvent } from "react";
import {
  type NoteType,
  type BoardObjectStates,
  type BoardState,
} from "../shared-types";

import "../css/board.scss";
import { Note } from "./Note";
import { Modal } from "./Modal/Modal";

export type Props = {
  initState: BoardState;
};

export const Board: FC<Props> = ({ initState }) => {
  const [boardObjects, setBoardObjects] = useState<BoardObjectStates>(
    initState.objects,
  );
  const [expectPlace, setExpectPlace] = useState<NoteType>("NONE");
  const [toolbarOpen, setToolbarOpen] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    if (expectPlace === "NONE") return;

    const objID = crypto.randomUUID();

    setBoardObjects((b) => ({
      ...b,
      [objID]: {
        object: {
          x: event.clientX,
          y: event.clientY,
          innerHTML: "",
          type: expectPlace,
        },
      },
    }));
  };

  return (
    <div className="board">
      <Modal
        id="image"
        width="90vw"
        height="90vh"
        isOpen={expectPlace === "IMAGE"}
        children={<p>Paste URL</p>}
      />
      <div className="board__toolbar">
        <button onClick={() => setToolbarOpen(!toolbarOpen)}>+</button>
        <div
          className={`toolbar ${toolbarOpen ? `toolbar--open` : `toolbar--closed`}`}
        >
          <button onClick={() => setExpectPlace("TEXT")}>T</button>
          <button onClick={() => setExpectPlace("IMAGE")}>I</button>
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

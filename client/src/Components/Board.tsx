import { useState, type FC, type MouseEvent } from "react";
import {
  type NoteType,
  type BoardObjectStates,
  type BoardState,
} from "../shared-types";

import "../css/board.scss";
import { Note } from "./Note";
import { ImageModal } from "./Modal/ImageModal";

export type Props = {
  initState: BoardState;
};

export const Board: FC<Props> = ({ initState }) => {
  const [boardObjects, setBoardObjects] = useState<BoardObjectStates>(
    initState.objects,
  );
  const [expectPlace, setExpectPlace] = useState<NoteType>("NONE");
  //noteFormat only applies to first place, after note should handle itself
  const [noteFormat, setNoteFormat] = useState("");
  const [toolbarOpen, setToolbarOpen] = useState(false);

  //Separate check so note can define what "waiting" constitutes
  const [awaitPlace, setAwaitPlace] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    if (expectPlace === "NONE" || awaitPlace) return;

    const objID = crypto.randomUUID();

    setBoardObjects((b) => ({
      ...b,
      [objID]: {
        object: {
          x: event.clientX,
          y: event.clientY,
          innerHTML: noteFormat,
          type: expectPlace,
        },
      },
    }));

    setExpectPlace("NONE");
    setNoteFormat("");
  };

  return (
    <div className="board">
      <ImageModal
        isOpen={expectPlace === "IMAGE"}
        setNoteFormat={setNoteFormat}
        setAwait={setAwaitPlace}
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

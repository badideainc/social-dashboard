import { useState, type FC, type MouseEvent } from "react";
import {
  type NoteType,
  type BoardObjectStates,
  type BoardState,
  type BoardObject,
} from "../shared-types";

import "../css/board.scss";
import { Note } from "./Note";
import { ImageModal } from "./Modal/ImageModal";
import { BoardHeader } from "./BoardHeader/BoardHeader";

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
  const [currentNoteID, setCurrentNoteID] = useState("");

  //Separate check so note can define what "waiting" constitutes
  const [awaitPlace, setAwaitPlace] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    setCurrentNoteID("");

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
          static: expectPlace == "IMAGE",
        },
      },
    }));

    setExpectPlace("NONE");
    setNoteFormat("");
  };

  const deleteNote = (note: BoardObject) => {
    const key = Object.keys(boardObjects).find(
      (o) => boardObjects[o].object === note,
    );

    if (key === undefined) {
      console.warn("Could not find key");
      return;
    }

    const tempState = { ...boardObjects };
    delete tempState[key];

    setBoardObjects(tempState);
  };

  return (
    <div className="board">
      <ImageModal
        isOpen={expectPlace === "IMAGE"}
        setNoteFormat={setNoteFormat}
        setAwait={setAwaitPlace}
      />
      <BoardHeader
        setExpectPlace={setExpectPlace}
        deleteNote={deleteNote}
        currentNote={boardObjects[currentNoteID]?.object || undefined}
      />
      <div className="board__body" onClick={handleOnClick}>
        {Object.keys(boardObjects).map((o) => {
          return (
            <Note
              key={o}
              id={o}
              object={boardObjects[o].object}
              setCurrentNote={setCurrentNoteID}
            />
          );
        })}
      </div>
    </div>
  );
};

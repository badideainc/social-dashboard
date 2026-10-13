import type { FC } from "react";
import type { BoardObject, NoteType } from "../../shared-types";
import { BoardHeaderRow } from "./BoardHeaderRow";
import { insertAtMouseSelection } from "../../util/insertAtMouseSelection";

type Props = {
  setExpectPlace: (value: React.SetStateAction<NoteType>) => void;
  currentNote: BoardObject | undefined;
};

export const BoardHeader: FC<Props> = ({ setExpectPlace, currentNote }) => {
  const currentNoteType = currentNote?.type || "NONE";

  return (
    <header className="board__toolbar">
      <BoardHeaderRow
        currentNoteType={currentNoteType}
        conditionNoteType="NONE"
        children={
          <>
            <button onClick={() => setExpectPlace("TEXT")}>T</button>
            <button onClick={() => setExpectPlace("IMAGE")}>I</button>
          </>
        }
      ></BoardHeaderRow>
      <BoardHeaderRow
        currentNoteType={currentNoteType}
        conditionNoteType="TEXT"
        children={
          <>
            <button onClick={() => insertAtMouseSelection("b")}>
              <b>B</b>
            </button>
            <button onClick={() => insertAtMouseSelection("i")}>
              <i>I</i>
            </button>
          </>
        }
      ></BoardHeaderRow>
    </header>
  );
};

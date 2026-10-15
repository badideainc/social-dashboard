import type { FC } from "react";
import type { BoardObject, NoteType } from "../../shared-types";
import { BoardHeaderRow } from "./BoardHeaderRow";
import { insertAtMouseSelection } from "../../util/insertAtMouseSelection";

type Props = {
  setExpectPlace: (value: React.SetStateAction<NoteType>) => void;
  deleteNote: (note: BoardObject) => void;
  currentNote: BoardObject | undefined;
};

export const BoardHeader: FC<Props> = ({
  setExpectPlace,
  deleteNote,
  currentNote,
}) => {
  const currentNoteType = currentNote?.type || "NONE";

  return (
    <div className="board__toolbar">
      <BoardHeaderRow
        currentNoteType={currentNoteType}
        conditionNoteType="NONE"
        children={
          <div>
            <button onClick={() => setExpectPlace("TEXT")}>T</button>
            <button onClick={() => setExpectPlace("IMAGE")}>I</button>
          </div>
        }
      ></BoardHeaderRow>
      <BoardHeaderRow
        currentNoteType={currentNoteType}
        conditionNoteType="TEXT"
        children={
          <>
            <div>
              <button onClick={() => insertAtMouseSelection("b")}>
                <b>B</b>
              </button>
              <button onClick={() => insertAtMouseSelection("i")}>
                <i>I</i>
              </button>
            </div>
            <div>
              <button onClick={() => deleteNote(currentNote!)}>Delete</button>
            </div>
          </>
        }
      ></BoardHeaderRow>
      <BoardHeaderRow
        currentNoteType={currentNoteType}
        conditionNoteType="IMAGE"
        children={
          <>
            <div>
              <button onClick={() => deleteNote(currentNote!)}>Delete</button>
            </div>
          </>
        }
      ></BoardHeaderRow>
    </div>
  );
};

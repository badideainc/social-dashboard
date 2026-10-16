import type { FC } from "react";
import type { BoardObject, NoteType } from "../../shared-types";
import { BoardHeaderRow } from "./BoardHeaderRow";
import { insertAtMouseSelection } from "../../util/insertAtMouseSelection";

type Props = {
  setExpectPlace: (value: React.SetStateAction<NoteType>) => void;
  modifyNote: (note: BoardObject, isDeleting: boolean) => void;
  currentNote: BoardObject | undefined;
};

export const BoardHeader: FC<Props> = ({
  setExpectPlace,
  modifyNote,
  currentNote,
}) => {
  return (
    <div className="board__toolbar">
      <BoardHeaderRow
        currentNote={currentNote}
        conditionNoteType="NONE"
        modifyNote={modifyNote}
        children={
          <div>
            <button onClick={() => setExpectPlace("TEXT")}>T</button>
            <button onClick={() => setExpectPlace("IMAGE")}>I</button>
          </div>
        }
      ></BoardHeaderRow>
      <BoardHeaderRow
        currentNote={currentNote}
        conditionNoteType="TEXT"
        modifyNote={modifyNote}
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
          </>
        }
      ></BoardHeaderRow>
      <BoardHeaderRow
        modifyNote={modifyNote}
        currentNote={currentNote}
        conditionNoteType="IMAGE"
        children={<></>}
      ></BoardHeaderRow>
    </div>
  );
};

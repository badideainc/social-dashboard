import type { FC } from "react";
import type { BoardObject, NoteType } from "../../shared-types";

type Props = {
  currentNote: BoardObject | undefined;
  conditionNoteType: NoteType;
  children: React.ReactNode;
  modifyNote: (note: BoardObject, isDeleting: boolean) => void;
};

export const BoardHeaderRow: FC<Props> = ({
  currentNote,
  conditionNoteType,
  children,
  modifyNote,
}) => {
  const noteType = currentNote?.type || "NONE";

  return (
    <div
      className={`board__toolbar--${conditionNoteType.toLocaleLowerCase()} 
    ${noteType === conditionNoteType ? "board__toolbar--visible" : "board__toolbar--hidden"}`}
    >
      {
        //Guaranteed to need to be on the toolbar if a note is selected
        noteType === "NONE" ? (
          <></>
        ) : (
          <>
            <div>
              <label>
                W: <input name="note-width" value={currentNote?.width}></input>
                H:{" "}
                <input name="note-height" value={currentNote?.height}></input>
              </label>
            </div>
            <div>
              <button onClick={() => modifyNote(currentNote!, true)}>
                Delete
              </button>
            </div>
          </>
        )
      }
      {children}
    </div>
  );
};

import type { FC } from "react";
import type { BoardObject, NoteType } from "../../shared-types";
import { getValidNumber } from "../../util/getValidNumber";
import { config } from "../../config";

type Props = {
  currentNote: BoardObject | undefined;
  conditionNoteType: NoteType;
  children: React.ReactNode;
  modifyNote: (note: BoardObject, isDeleting?: boolean) => void;
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
                W:{" "}
                <input
                  name="note-width"
                  value={currentNote?.width}
                  onChange={(event) => {
                    const num = getValidNumber(
                      event.target.value,
                      currentNote!.width,
                      config.MIN_NOTE_SIZE,
                      config.MAX_NOTE_SIZE,
                    );

                    currentNote!.width = num;
                    modifyNote(currentNote!);
                  }}
                ></input>
              </label>
              <label>
                H:{" "}
                <input
                  name="note-height"
                  value={currentNote?.height}
                  onChange={(event) => {
                    const num = getValidNumber(
                      event.target.value,
                      currentNote!.height,
                      config.MIN_NOTE_SIZE,
                      config.MAX_NOTE_SIZE,
                    );

                    currentNote!.height = num;
                    modifyNote(currentNote!);
                  }}
                ></input>
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

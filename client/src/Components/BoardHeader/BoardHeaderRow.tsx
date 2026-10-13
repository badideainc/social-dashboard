import type { FC } from "react";
import type { NoteType } from "../../shared-types";

type Props = {
  currentNoteType: NoteType;
  conditionNoteType: NoteType;
  children: React.ReactNode;
};

export const BoardHeaderRow: FC<Props> = ({
  currentNoteType,
  conditionNoteType,
  children,
}) => {
  return (
    <div
      className={`board__toolbar--${conditionNoteType.toLocaleLowerCase()} 
    ${currentNoteType === conditionNoteType ? "board__toolbar--visible" : "board__toolbar--hidden"}`}
    >
      {children}
    </div>
  );
};

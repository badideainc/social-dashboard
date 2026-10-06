import type { FC } from "react";
import type { BoardObject } from "../shared-types";

import "../css/note.scss";

type Props = {
  object: BoardObject;
};

export const Note: FC<Props> = ({ object }) => {
  return (
    <div
      className="note"
      style={{
        left: object.x,
        top: object.y,
      }}
      // may need to change this
      dangerouslySetInnerHTML={{ __html: object.innerHTML }}
      contentEditable
    />
  );
};

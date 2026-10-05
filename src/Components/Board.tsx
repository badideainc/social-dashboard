import { useState, type FC } from "react";
import { type BoardState } from "../shared-types";

type Props = {
  id: string;
};

export const Board: FC<Props> = ({ id }) => {
  const [boardState, setBoardState] = useState<BoardState>({});
  const objects = boardState[id].objects;

  return (
    <div className="board">
      <div className="board__toolbar"></div>
      {Object.keys(objects).map((o) => {
        return (
          <div
            className="note"
            // may need to change this
            dangerouslySetInnerHTML={{ __html: objects[o].innerHTML }}
          />
        );
      })}
    </div>
  );
};

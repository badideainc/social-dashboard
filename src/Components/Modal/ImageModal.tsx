import { useState, type FC } from "react";
import type { NoteType } from "../../shared-types";
import { Modal } from "./Modal";

type Props = {
  matchType: NoteType;
};

export const ImageModal: FC<Props> = ({ matchType }) => {
  const [imagePath, setImagePath] = useState("");

  return (
    <Modal
      id="image"
      width="50vw"
      height="25vh"
      isOpen={matchType === "IMAGE"}
      children={
        <form>
          <p>Paste URL</p>
          <input
            name="imageURL"
            placeholder="URL"
            defaultValue={imagePath}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) => setImagePath(event.target.value)}
          ></input>
        </form>
      }
    />
  );
};

import { useState, type FC } from "react";
import { Modal } from "./Modal";
import type { NoteModalProps } from "../../shared-types";

//https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_640.jpg
//Royalty free cat image

export const ImageModal: FC<NoteModalProps> = ({
  isOpen,
  setNoteFormat,
  setAwait,
}) => {
  const [imagePath, setImagePath] = useState("");

  //Only handle when open
  if (isOpen) {
    if (imagePath == "") {
      setAwait(true);
    } else {
      setAwait(false);
      setNoteFormat(`<img src=${imagePath} alt=${imagePath}></img>`);
    }
  }

  return (
    <Modal
      id="image"
      width="50vw"
      height="25vh"
      isOpen={isOpen}
      children={
        <>
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
          <img src={imagePath} alt={imagePath}></img>
        </>
      }
    />
  );
};

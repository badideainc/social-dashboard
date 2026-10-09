export type BoardState = {
  id: string;
  name: string;
  objects: BoardObjectStates;
};

export type BoardObjectStates = {
  [key: string]: {
    object: BoardObject;
  };
};

export type BoardObject = {
  x: number;
  y: number;
  innerHTML: string;
  type: NoteType;
};

export type NoteType = "NONE" | "TEXT" | "IMAGE";

export type NoteModalProps = {
  isOpen: boolean;
  setNoteFormat: React.Dispatch<React.SetStateAction<string>>;
  setAwait: React.Dispatch<React.SetStateAction<boolean>>;
};

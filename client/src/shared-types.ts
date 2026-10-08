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

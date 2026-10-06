export type BoardState = {
  [key: string]: {
    object: BoardObject;
  };
};

export type BoardObject = {
  x: number;
  y: number;
  innerHTML: string;
};

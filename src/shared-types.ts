export type BoardState = {
  [key: string]: {
    objects: BoardObject;
  };
};

export type BoardObject = {
  [key: string]: {
    x: number;
    y: number;
    innerHTML: string;
  };
};

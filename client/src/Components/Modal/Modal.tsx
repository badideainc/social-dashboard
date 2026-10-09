import { type FC } from "react";
import "../../css/modal.scss";

type Props = {
  id: string;
  width: string;
  height: string;
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal: FC<Props> = ({ id, width, height, isOpen, children }) => {
  return (
    <div
      className={`modal modal--${id} modal--${isOpen ? "open" : "closed"}`}
      style={{ width: width, height: height }}
    >
      <button onClick={() => {}}>X</button>
      {children}
    </div>
  );
};

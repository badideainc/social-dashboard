import "./App.css";
import { Board } from "./Components/Board";
import type { BoardState } from "./shared-types";
import { fetchBoard } from "./util/fetchBoard";

function App() {
  fetchBoard();

  const boardState: BoardState = { id: "test", name: "Test", objects: {} };

  //temp
  return (
    <>
      <header>
        <p>Board Name</p>
      </header>
      <Board initState={boardState} />
    </>
  );
}

export default App;

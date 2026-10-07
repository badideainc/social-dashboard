import "./App.css";
import { Board } from "./Components/Board";
import type { BoardState } from "./shared-types";

function App() {
  //need to fetch the board
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

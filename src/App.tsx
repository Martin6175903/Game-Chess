import './App.css'
import BoardComponent from "./components/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";

function App() {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart()
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <BoardComponent board={board} setBoard={setBoard}/>
        </div>
    )
}

export default App

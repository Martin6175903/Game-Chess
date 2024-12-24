import {Board} from "../models/Board.ts";
import {FC} from "react";
import CellComponent from "./CellComponent.tsx";
import React from "react";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board}) => {
    return (
        <div className="w-[calc(64px*8)] h-[calc(64px*8)] bg-gray-500 flex flex-wrap">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent cell={cell} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;
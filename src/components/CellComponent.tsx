import {Cell} from "../models/Cell.ts";
import {FC} from "react";

interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color, 'w-16', 'h-16', 'flex', 'justify-center', 'items-center'].join(" ")}>
            {/*{cell.figure}*/}
        </div>
    );
};

export default CellComponent;
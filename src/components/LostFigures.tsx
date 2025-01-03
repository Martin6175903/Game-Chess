import {FC} from 'react';
import {Figure} from "../models/figures/Figure.ts";

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure =>
                <div className="flex justify-between" key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
                </div>
            )}
        </div>
    );
};

export default LostFigures;
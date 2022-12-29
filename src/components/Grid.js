import React from "react";
import GridItem from "./GridItem";

const Grid = ({ grid, interactiveComponent }) => {



    return (
        <div className="grid grid-cols-3 grid-flow-row gap-4 px-5">
            {grid.map((item, index) => <GridItem key={index} item={item} interactiveComponent={interactiveComponent(item)} />)}
        </div>
    )
}

export default Grid;

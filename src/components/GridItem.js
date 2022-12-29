import React from 'react'
import { GrCart, GrStar } from 'react-icons/gr';

const GridItem = ({ item, interactiveComponent }) => {
    return (
        <div className="rounded-lg drop-shadow-md bg-white">
            <img className="w-full h-36 object-cover rounded-t-lg" src={item.image} alt={item.name} />
            <section className=" p-3 ">
                <h3 className="font-bold">{item.name}</h3>
                <div className="my-3">
                    <h3 className="text-neutral-500 text-sm">{item.description}</h3>
                    <div className="text-sm flex flex-row items-center gap-1"><GrStar className="text-yellow-500 mr-0" /> {item.ratings}  <GrCart className="ml-3" /> {item.buyCount}</div>
                </div>
                {interactiveComponent}
            </section>
        </div>
    )
}

export default GridItem
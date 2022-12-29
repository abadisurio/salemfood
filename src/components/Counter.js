import React, { useState } from 'react'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

const Counter = ({ counter, reduce, add }) => {

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(prev => prev += 1)
        add(count)
    }
    const reduceCount = () => {
        setCount(prev => prev -= 1)
        reduce(count)
    }

    counter(count)
    return (
        <div className="flex flex-row items-center">
            {/* <h3 className="font-bold mr-auto">Rp{indoCurrency.format(item.price)}</h3> */}
            {count > 0 && (<>
                <button className="bg-green-200 p-1 rounded-sm" onClick={reduceCount}><GrFormSubtract /> </button>
                <span className="px-3">{count}</span>
            </>
            )}
            <button className="bg-green-200 p-1 rounded-sm" onClick={addCount}><GrFormAdd /></button>
        </div>
    )
}

export default Counter
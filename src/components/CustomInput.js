import React from 'react'

const CustomInput = ({ properties, type = '' }) => {
    return (
        <div className='p-1'>
            <input className='p-1 border w-full rounded border-solid border-gray-400' {...{ ...properties, type }} />
        </div>
    )
}

export default CustomInput
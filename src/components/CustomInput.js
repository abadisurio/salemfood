import React from 'react'

const CustomInput = (props) => {
    // console.log(props)
    return (
        <div className='p-1'>
            <input className='p-1 border w-full rounded border-solid border-gray-400' {...props} />
        </div>
    )
}

export default CustomInput
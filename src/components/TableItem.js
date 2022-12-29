import React from 'react'
import { IoPencil, IoTrash } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const TableItem = ({ item, index, type }) => {
    return (
        <>
            <tr>
                <td>
                    <input type={'checkbox'} id={"item-" + index} />
                </td>
                {Object.keys(type.properties).map(key => {
                    // console.log(key)
                    return <td key={key}>{item[key]}</td>
                })}
                <td>
                    <div className='w-24 flex flex-row gap-2' >
                        <button className='rounded bg-gray-500 p-1 text-white'>
                            <IoTrash />
                        </button>
                        <Link to={`/edit/${type.name}/${item['id']}`} className='rounded bg-gray-500 p-1 text-white'>
                            <IoPencil />
                        </Link>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableItem
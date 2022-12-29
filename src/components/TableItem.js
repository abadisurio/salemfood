import React from 'react'
import { IoPencil, IoTrash } from 'react-icons/io5'
import { Link, Outlet, useLocation } from 'react-router-dom'

const TableItem = ({ item, index, type }) => {
    const location = useLocation();
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
                        <Link to={`/delete/${type.name}/${item['id']}`} state={{ background: location }} className='rounded bg-gray-500 p-1 text-white'>
                            <IoTrash />
                        </Link>
                        <Outlet />
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
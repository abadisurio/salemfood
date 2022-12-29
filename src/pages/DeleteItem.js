import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import menuItem from '../models/menuItem';
import models from '../models';
import contexts from '../contexts';

const DeleteItem = () => {
    let { itemId, type } = useParams();
    const [item, setItem] = useState(models[type].properties)
    const contextUsed = useContext(contexts[type])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            console.log('run')
            const gotHook = await contextUsed.getLocalHook(itemId);
            console.log(gotHook);
            // console.log(gotHook);
            setItem(gotHook);
        }
        fetchData()
    }, [contextUsed, itemId])

    const deleteNow = async () => {
        const gotHook = await contextUsed.removeLocalHook(itemId);
        console.log(gotHook);
        navigate('/admin')
    }
    return (
        <div className="container mx-auto flex items-center justify-center pt-10">
            <div className='drop-shadow-xl rounded-xl p-5 bg-white'>
                <h1>Delete item?</h1>
                {Object.keys(item).map(key => {
                    return <h1 key={key}><span className='font-bold'>{menuItem.properties[key]}</span> {item[key]}</h1>
                })}
                <div className=' mt-5 float-right'>
                    <button className='p-1 px-3 bg-green-500 text-white rounded mr-2' onClick={() => navigate(-1)} >Batal</button>
                    <button className='p-1 px-3 bg-red-500 text-white rounded mr-2' onClick={deleteNow}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteItem
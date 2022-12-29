import React from 'react'
import { useParams } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import models from '../models';

const EditItem = () => {

    let { itemId, type } = useParams();
    const gotType = models[type]
    console.log(itemId, gotType);
    return (
        <div className='container px-5 mx-auto'>
            {Object.keys(gotType.properties).map(key => {
                return (
                    <>
                        <h6>{gotType.properties[key]}</h6>
                        <CustomInput type='text' />
                    </>
                )
            })}
            <div className=' mt-5 float-right'>
                <button className='p-1 px-3 bg-red-500 text-white rounded mr-2'>Batal</button>
                <button className='p-1 px-3 bg-green-500 text-white rounded mr-2'>Simpan</button>
            </div>
        </div>
    )
}

export default EditItem
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import models from '../models';
import { MenuContext } from '../contexts/MenuContext';
import menuItem from '../models/menuItem';

const EditItem = () => {
    const menuContext = useContext(MenuContext)

    let { itemId, type } = useParams();
    const [item, setItem] = useState(menuItem.properties)
    const gotType = models[type]
    // console.log(itemId, gotType);

    useEffect(() => {
        // console.log(menuContext)
        const gotMenu = menuContext.getMenu(itemId);
        // console.log(gotMenu);
        setItem(gotMenu);

    }, [menuContext, itemId])

    return (
        <div className='container px-5 mx-auto'>
            {Object.keys(gotType.properties).map(key => {
                return (
                    <Fragment key={key}>
                        <h6>{gotType.properties[key]}</h6>
                        <CustomInput type='text' value={item[key]} onChange={value => console.log(value)} />
                    </Fragment>
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
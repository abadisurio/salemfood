import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import models from '../models';
import contexts from '../contexts';

const EditItem = () => {
    // const context = useContext(HookContext)

    const context = useContext(contexts['menu-item'])
    const navigate = useNavigate()
    // console.log(context)
    let { itemId, type } = useParams();
    const gotType = models[type]
    const [item, setItem] = useState(gotType.properties)
    // console.log(itemId, gotType);

    useEffect(() => {
        const fetchData = async () => {
            console.log('run')
            const gotHook = await context.getLocalHook(itemId);
            console.log(gotHook);
            // console.log(gotHook);
            setItem(gotHook);
        }
        fetchData()
    }, [context, itemId])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const newData = {}
        console.log(data.get('name')); // reference by form input's `name` tag
        for (const [key, value] of data.entries()) {
            console.log(key);
            newData[key] = value
        }
        const isSuccess = await context.updateLocalHook(itemId, item)
        console.log(isSuccess);
        navigate(-1)
        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        // });
    }

    const handleChange = ({ target }) => setItem(prev => ({ ...prev, [target.name]: target.value }))

    if (context.isLoading) return <h1>loading</h1>

    return (
        <div className='container px-5 mx-auto'>
            <form onSubmit={handleSubmit}>
                {Object.keys(gotType.properties).map(key => {
                    return (
                        <Fragment key={key}>
                            <h6>{gotType.properties[key]}</h6>
                            <CustomInput type='text' name={key} value={item[key]} onChange={handleChange} />
                        </Fragment>
                    )
                })}
                <div className=' mt-5 float-right'>
                    <button className='p-1 px-3 bg-red-500 text-white rounded mr-2' type='submit'>Batal</button>
                    <button className='p-1 px-3 bg-green-500 text-white rounded mr-2'>Simpan</button>
                </div>
            </form>
        </div>
    )
}

export default EditItem
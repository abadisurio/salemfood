import React from 'react'
import { useParams } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

const EditItem = () => {

    let { itemId, type } = useParams();
    console.log(itemId, type);
    return (
        <div>
            <CustomInput type='text' />
        </div>
    )
}

export default EditItem
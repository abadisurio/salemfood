import React, { useContext, useEffect, useState } from 'react'
import Table from '../components/Table'
import models from '../models'
import contexts from '../contexts'

const Admin = () => {

    const kind = 'menu-item'
    const context = useContext(contexts[kind])
    const [hookList, setHookList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await context.getLocalHookList()
            console.log(data)
            setHookList(data)
        }
        fetchData()
    }, [context])

    if (context.isLoading) return <h1>loading</h1>
    // console.log(await context.getLocalHookList());
    return (
        <div className="container mx-auto px-4 gap-4">
            <div>Admin</div>
            <Table type={models[kind]} data={hookList} />
            {/* <ul className='grid pr-2 pt-2 gap-2'>
                {foodCollection.map((item, index) => {
                    return (
                        <TableItem key={index} {...{ item, index, type: hookItem }} />
                    )
                })}
            </ul> */}
        </div>
    )
}

export default Admin
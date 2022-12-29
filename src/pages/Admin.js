import React, { useContext, useEffect, useState } from 'react'
import menuItem from '../models/menuItem'
import Table from '../components/Table'
import { MenuContext } from '../contexts/MenuContext'
import { Outlet } from 'react-router-dom'

const Admin = () => {

    const menuContext = useContext(MenuContext)
    const [menuList, setMenuList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await menuContext.getLocalMenuList()
            console.log(data)
            setMenuList(data)
        }
        fetchData()
    }, [menuContext])


    if (menuContext.isLoading) return <h1>loading</h1>
    // console.log(await menuContext.getLocalMenuList());
    return (
        <div className="container mx-auto px-4 gap-4">
            <div>Admin</div>
            <Table type={menuItem} data={menuList} />
            <Outlet />
            {/* <ul className='grid pr-2 pt-2 gap-2'>
                {foodCollection.map((item, index) => {
                    return (
                        <TableItem key={index} {...{ item, index, type: menuItem }} />
                    )
                })}
            </ul> */}
        </div>
    )
}

export default Admin
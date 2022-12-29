import { useEffect, useState } from 'react'
import menuItem from '../models/menuItem'


const foodCollectionDB = [
    { id: '0', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '1', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '2', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '3', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '4', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '5', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '6', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '7', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
    { id: '8', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 },
]

const useMenu = (child) => {
    const [menuList, setMenuList] = useState([menuItem.properties])
    const [isLoading, setIsLoading] = useState(true)
    const [isInitialized, setIsInitialized] = useState(false)
    const res = block => new Promise(resolve => { if (isInitialized) resolve(block) })
    // const restAPI = rest();
    // console.log(restAPI);

    useEffect(() => {
        const fetchData = async () => {
            await initializeMenu()
            setIsInitialized(true)
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);
        // setIsLoading(false)
    }, [])

    // useEffect(() => {
    // }, [menuList])

    // console.log(menuList)


    const initializeMenu = async () => {
        // const res = await restAPI.get('hehe');
        // console.log(res)
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve(foodCollectionDB)
            }, 500)
        })
        console.log('called')
        setMenuList(data)
        setIsLoading(false)
    }

    const addMenu = (id) => {
        // console.log('id', id)
        setMenuList(prev => [...prev, id])
    }
    const getMenu = async (id) => {
        // console.log('id', id)
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve(foodCollectionDB.find(item => item.id === id))
            }, 500)
        })
        return data
    }
    const getLocalMenu = async (id) => {
        console.log('id', id)
        console.log(menuList)
        return res(menuList.find(item => item.id === id))
    }
    const getLocalMenuList = async () => {
        // console.log('id', id)
        console.log(menuList)
        return res(menuList)
    }
    const updateLocalMenu = async (id, newData = menuItem.properties) => {
        console.log('id', id, newData)
        setMenuList(menuList.map(item => id !== item.id ? item : { id, ...newData }))
        // setIsLoading(false)
        return res({ id, ...newData })
    }
    const removeMenu = (index) => {
        const newList = menuList.filter((item, index2) => index2 !== index)
        setMenuList(newList)
        // console.log('product removed')
    }
    const removeLocalMenu = async (id) => {
        const newList = menuList.filter((item) => item.id !== id)
        setMenuList(newList)
        return res(true)
        // console.log('product removed')
    }

    // if (!isInitialized) {
    //     return { isLoading }
    // }

    // return { initializeMenu, isLoading, menuList, addMenu, getMenu, removeMenu }
    // console.log(isInitialized);
    // if (isInitialized) {
    return { initializeMenu, isLoading, menuList, addMenu, getMenu, getLocalMenu, getLocalMenuList, updateLocalMenu, removeMenu, removeLocalMenu }
    // } else {
    // return { isLoading, menuList, }
    // }
    // return <child 
}

export default useMenu
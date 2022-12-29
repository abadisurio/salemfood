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
    const [menuList, setHookList] = useState([menuItem.properties])
    const [isLoading, setIsLoading] = useState(true)
    const [isInitialized, setIsInitialized] = useState(false)
    const res = block => new Promise(resolve => { if (isInitialized) resolve(block) })
    // const restAPI = rest();
    // console.log(restAPI);

    useEffect(() => {
        const fetchData = async () => {
            await initializeHook()
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


    const initializeHook = async () => {
        // const res = await restAPI.get('hehe');
        // console.log(res)
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve(foodCollectionDB)
            }, 500)
        })
        console.log('called')
        setHookList(data)
        setIsLoading(false)
    }

    const addHook = (id) => {
        // console.log('id', id)
        setHookList(prev => [...prev, id])
    }
    const getHook = async (id) => {
        // console.log('id', id)
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve(foodCollectionDB.find(item => item.id === id))
            }, 500)
        })
        return data
    }
    const getLocalHook = async (id) => {
        console.log('id', id)
        console.log(menuList)
        return res(menuList.find(item => item.id === id))
    }
    const getLocalHookList = async () => {
        // console.log('id', id)
        console.log(menuList)
        return res(menuList)
    }
    const updateLocalHook = async (id, newData = menuItem.properties) => {
        console.log('id', id, newData)
        setHookList(menuList.map(item => id !== item.id ? item : { id, ...newData }))
        // setIsLoading(false)
        return res({ id, ...newData })
    }
    const removeHook = (index) => {
        const newList = menuList.filter((item, index2) => index2 !== index)
        setHookList(newList)
        // console.log('product removed')
    }
    const removeLocalHook = async (id) => {
        const newList = menuList.filter((item) => item.id !== id)
        setHookList(newList)
        return res(true)
        // console.log('product removed')
    }

    // if (!isInitialized) {
    //     return { isLoading }
    // }

    // return { initializeHook, isLoading, menuList, addHook, getHook, removeHook }
    // console.log(isInitialized);
    // if (isInitialized) {
    return { initializeHook, isLoading, menuList, addHook, getHook, getLocalHook, getLocalHookList, updateLocalHook, removeHook, removeLocalHook }
    // } else {
    // return { isLoading, menuList, }
    // }
    // return <child 
}

export default useMenu
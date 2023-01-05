import { useEffect, useState } from 'react'
import menuItem from '../models/menuItem'
import rest from '../api/rest'

const useMenu = (child) => {
    const [dataList, setHookList] = useState([menuItem.properties])
    const [isLoading, setIsLoading] = useState(true)
    const [isInitialized, setIsInitialized] = useState(false)
    const res = block => new Promise(resolve => { if (isInitialized) resolve(block) })
    const restAPI = rest();
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    // }, [dataList])

    // console.log(dataList)


    const initializeHook = async () => {
        const data = await restAPI.get('/menu')
        console.log('called')
        console.log(data['payload'])
        const modeled = data['payload'].map(item =>
        // ({ id: '2', name: 'Kebab Turki', description: 'Hidangan Laut, Minuman, Ayam, Aneka Nasi', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20000, ratings: 4.8, buyCount: 150 })
        ({
            id: item['id_makanan'].toString(),
            name: item['nama'],
            description: item['deskripsi'],
            image: item['gambar'],
            price: item['harga'],
            ratings: item['rating'],
            buyCount: item['jml_beli']
        })
        )
        setHookList(modeled)
        setIsLoading(false)
    }

    const addHook = (id) => {
        // console.log('id', id)
        setHookList(prev => [...prev, id])
    }
    const getHook = async (id) => {
        // console.log('id', id)
        const data = await restAPI.get('/find/' + id)
        // console.log('called')
        // console.log(data['payload'])
        const modeled = data['payload'].map(item => ({
            id: item['id_makanan'].toString(),
            name: item['nama'],
            description: item['deskripsi'],
            image: item['gambar'],
            price: item['harga'],
            ratings: item['rating'],
            buyCount: item['jml_beli']
        }))
        return modeled
    }
    const getLocalHook = async (id) => {
        console.log('id', id)
        console.log(dataList)
        return res(dataList.find(item => item.id === id))
    }
    const getLocalHookList = async () => {
        // console.log('id', id)
        console.log(dataList)
        return res(dataList)
    }
    const updateLocalHook = async (id, newData = menuItem.properties) => {
        console.log('id', id, newData)
        setHookList(dataList.map(item => id !== item.id ? item : { id, ...newData }))
        // setIsLoading(false)
        return res({ id, ...newData })
    }
    const removeHook = (index) => {
        const newList = dataList.filter((item, index2) => index2 !== index)
        setHookList(newList)
        // console.log('product removed')
    }
    const removeLocalHook = async (id) => {
        const newList = dataList.filter((item) => item.id !== id)
        setHookList(newList)
        return res(true)
        // console.log('product removed')
    }

    // if (!isInitialized) {
    //     return { isLoading }
    // }

    // return { initializeHook, isLoading, dataList, addHook, getHook, removeHook }
    // console.log(isInitialized);
    // if (isInitialized) {
    return { initializeHook, isLoading, dataList, addHook, getHook, getLocalHook, getLocalHookList, updateLocalHook, removeHook, removeLocalHook }
    // } else {
    // return { isLoading, dataList, }
    // }
    // return <child 
}

export default useMenu
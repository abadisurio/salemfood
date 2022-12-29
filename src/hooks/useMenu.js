import { useState } from 'react'


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

    const [menuList, setMenuList] = useState(foodCollectionDB)

    const addMenu = (id) => {
        // console.log('id', id)
        setMenuList(prev => [...prev, id])
    }
    const getMenu = (id) => {
        // console.log('id', id)
        return menuList.find(item => item.id === id)
    }
    const removeMenu = (index) => {
        const newList = menuList.filter((item, index2) => index2 !== index)
        setMenuList(newList)
        // console.log('product removed')
    }

    return { menuList, addMenu, getMenu, removeMenu }
    // return <child 
}

export default useMenu
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

const useCart = (child) => {
    // const context = useContext(contexts[kind])

    const [collection, setCollection] = useState(foodCollectionDB)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState({})
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await context.getLocalHookList()
    //         console.log(data)
    //         setGridCollection(data)
    //     }
    //     fetchData()
    // }, [context])

    const addToCart = (itemId) => {
        console.log(itemId);
        setTotalPrice(prev => prev + collection[itemId].price)
        setCart(prev => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }))
    }
    const removeFromCart = (itemId) => {
        setTotalPrice(prev => prev - collection[itemId].price)
        if (cart[itemId] > 1) {
            console.log('sini1');
            setCart(prev => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }))
        } else {
            console.log('sini');
            const { [itemId]: omitted, ...rest } = cart
            setCart(rest)
            // delete cart[itemId]
        }
    }

    return { cart, addToCart, removeFromCart, totalPrice }
    // } else {
    // return { isLoading, menuList, }
    // }
    // return <child 
}

export default useCart
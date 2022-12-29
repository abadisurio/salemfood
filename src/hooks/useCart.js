import { useState } from 'react'

const useCart = (child) => {
    // const context = useContext(contexts[kind])

    const [collection, setCollection] = useState([])
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

    const loadCart = (data) => {
        setCollection(data)
    }

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
            // console.log('sini1');
            setCart(prev => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }))
        } else {
            // console.log('sini');
            const { [itemId]: omitted, ...rest } = cart
            setCart(rest)
            // delete cart[itemId]
        }
    }

    return { cart, loadCart, addToCart, removeFromCart, totalPrice }
    // } else {
    // return { isLoading, menuList, }
    // }
    // return <child 
}

export default useCart
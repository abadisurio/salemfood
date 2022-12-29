import React, { useEffect, useState } from "react";


import { GrCart, GrFormAdd, GrFormSubtract, GrStar } from 'react-icons/gr';

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

const Menu = () => {

    const indoCurrency = new Intl.NumberFormat('id-ID', {
        currency: 'IDR', minimumFractionDigits: 0,
    })

    const [foodCollection, setFoodCollection] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [cart, setCart] = useState({})
    useEffect(() => {
        loadData()

    }, [foodCollection])

    const loadData = () => {
        setFoodCollection(foodCollectionDB)
    }

    const addToCart = (itemId) => {
        setTotalPrice(prev => prev + foodCollection[itemId].price)
        setCart(prev => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }))
    }
    const removeFromCart = (itemId) => {
        setTotalPrice(prev => prev - foodCollection[itemId].price)
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


    return (
        <>
            <div className="flex flex-row container mx-auto px-4 gap-4">
                <div>
                    <div className="sticky top-0 backdrop-blur-md bg-white/70 z-50 p-3">
                        <h1 className="font-bold text-xl">Makanan</h1>
                    </div>
                    <div className="grid grid-cols-3 grid-flow-row gap-4 px-5">
                        {foodCollection.map(item => {
                            return (
                                <div key={item.id} className="rounded-lg drop-shadow-md bg-white">
                                    <img className="w-full h-36 object-cover rounded-t-lg" src={item.image} alt={item.name} />
                                    <section className=" p-3 ">
                                        <h3 className="font-bold">{item.name}</h3>
                                        <div className="my-3">
                                            <h3 className="text-neutral-500 text-sm">{item.description}</h3>
                                            <div className="text-sm flex flex-row items-center gap-1"><GrStar className="text-yellow-500 mr-0" /> {item.ratings}  <GrCart className="ml-3" /> {item.buyCount}</div>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <h3 className="font-bold mr-auto">Rp{indoCurrency.format(item.price)}</h3>
                                            {cart[item.id] && (<>
                                                <button className="bg-green-200 p-1 rounded-sm" onClick={() => removeFromCart(item.id)}><GrFormSubtract /> </button>
                                                <span className="px-3">{cart[item.id]}</span>
                                            </>
                                            )}
                                            <button className="bg-green-200 p-1 rounded-sm" onClick={() => addToCart(item.id)}><GrFormAdd /></button>
                                        </div>
                                    </section>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-80">
                    <div className="sticky top-0 pt-5">
                        <div className="w-full p-5 drop-shadow-md bg-white font-mono">
                            <h1 className="font-bold text-center">Salemfood <br /> Jl. Salemba Raya No.53, RT.9/RW.5</h1>
                            <h3>Nomor meja 47</h3>

                            <h1>----</h1>
                            {Object.keys(cart).map(itemId => {
                                const foodItem = foodCollection.find(item => item.id === itemId)
                                return (
                                    <div key={itemId} className="flex"><span className="mr-auto">{cart[itemId]}x {foodItem.name}</span>Rp{indoCurrency.format(foodItem.price * cart[itemId])}</div>
                                )
                            })}
                            <h1>----</h1>
                            <div className="flex"><span className="mr-auto">Total</span>Rp{indoCurrency.format(totalPrice)}</div>
                            <br />
                            <button className="underline border border-stone-500 p-2">Catat pesanan {`>>>`}</button>
                        </div>
                    </div>
                </div>

            </div>
            <footer>
                footer
            </footer>
        </>
    )
}

export default Menu;

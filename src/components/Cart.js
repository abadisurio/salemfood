import React, { useContext } from 'react'
import contexts from '../contexts'

const Cart = () => {
    const indoCurrency = new Intl.NumberFormat('id-ID', {
        currency: 'IDR', minimumFractionDigits: 0,
    })
    const context = useContext(contexts['cart'])
    console.log(context)

    const kindCollection = ['menu-item', 'cart']

    const contextCollection = {}

    for (const kind of kindCollection) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        contextCollection[kind] = useContext(contexts[kind])
    }
    return (
        <div className="w-full p-5 drop-shadow-md bg-white font-mono">
            <h1 className="font-bold text-center">Salemfood <br /> Jl. Salemba Raya No.53, RT.9/RW.5</h1>
            <h3>Nomor meja 47</h3>

            <h1>----</h1>
            {Object.keys(contextCollection['cart'].cart).map(itemId => {
                const foodItem = contextCollection['menu-item'].dataList.find(item => item.id === itemId)
                return (
                    <div key={itemId} className="flex"><span className="mr-auto">{contextCollection['cart'].cart[itemId]}x {foodItem.name}</span>Rp{indoCurrency.format(foodItem.price * contextCollection['cart'].cart[itemId])}</div>
                )
            })}
            <h1>----</h1>
            <div className="flex"><span className="mr-auto">Total</span>Rp{indoCurrency.format(contextCollection['cart'].totalPrice)}</div>
            <br />
            <button className="underline border border-stone-500 p-2">Catat pesanan {`>>>`}</button>
        </div>
    )
}

export default Cart
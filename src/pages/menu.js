import React, { useContext, useEffect, useState } from "react";

import Cart from "../components/Cart";
import Grid from "../components/Grid";
import contexts from "../contexts";
import Counter from "../components/Counter";

const Menu = () => {

    const kindCollection = ['menu-item', 'cart']

    const contextCollection = {}

    for (const kind of kindCollection) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        contextCollection[kind] = useContext(contexts[kind])
    }
    const [grid, setGridCollection] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await contextCollection['menu-item'].getLocalHookList()
            console.log(data)
            setGridCollection(data)
        }
        fetchData()
    })

    const atc = (id) => contextCollection['cart'].addToCart(id)
    const rfc = (id) => contextCollection['cart'].removeFromCart(id)

    return (
        <>
            <div className="flex flex-row container mx-auto px-4 gap-4">
                <div>
                    <div className="sticky top-0 backdrop-blur-md bg-white/70 z-50 p-3">
                        <h1 className="font-bold text-xl">Makanan</h1>
                    </div>
                    <Grid kind='menu-item' grid={grid} interactiveComponent={(eachItem) => [<Counter counter={(count) => console.log('sini ', count)} add={() => atc(eachItem.id)} reduce={() => rfc(eachItem.id)} />]} />
                </div>
                <div className="w-80">
                    <div className="sticky top-0 pt-5">
                        <Cart />
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

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white">
            <div className="container mx-auto px-4 py-4">
                <Link to='/' >
                    <h1 className="text-3xl font-bold">
                        SalemFood
                    </h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
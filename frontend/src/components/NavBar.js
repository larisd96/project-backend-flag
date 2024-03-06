import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';

const navbarItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/shop-list', name: 'ShopList', icon: <FaShoppingCart /> },
    { path: '/logout', name: 'Logout', icon: <FaSignOutAlt /> },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='bg-gray-800 p-4 flex justify-between items-center'>
            <div className="flex items-center">
                <h1 className="text-white text-2xl font-semibold">IHOME</h1>
            </div>
            <div className="flex items-center">
                <FaBars className="text-white text-xl md:hidden cursor-pointer" onClick={handleMenuToggle} />
                {menuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-md">
                        {navbarItems.map(value => (
                            <Link 
                                key={value.name} 
                                to={value.path}
                                className="block text-white py-2 px-4 hover:bg-gray-700 transition duration-300"
                            >
                                {value.icon}
                                <span className="ml-2">{value.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
                <div className="hidden md:flex items-center gap-6">
                    {navbarItems.map(value => (
                        <Link 
                            key={value.name} 
                            to={value.path}
                            className="text-white flex items-center gap-2 hover:text-gray-300 transition duration-300"
                        >
                            {value.icon}
                            <span>{value.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

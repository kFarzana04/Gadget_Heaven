import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const [showWishlistDropdown, setShowWishlistDropdown] = useState(false);

    const cartRef = useRef(null);
    const wishlistRef = useRef(null);

    useEffect(() => {
        updateCounts();

        window.addEventListener("storage", updateCounts);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("storage", updateCounts);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const updateCounts = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setCartCount(cart.length);
        setWishlistCount(wishlist.length);
        setCartItems(cart);
        setWishlistItems(wishlist);
    };

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setShowCartDropdown(false);
        }
        if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
            setShowWishlistDropdown(false);
        }
    };

    const toggleCartDropdown = () => {
        setShowCartDropdown(!showCartDropdown);
        setShowWishlistDropdown(false);
    };

    const toggleWishlistDropdown = () => {
        setShowWishlistDropdown(!showWishlistDropdown);
        setShowCartDropdown(false);
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistic">Statistic</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-3xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative mx-3" ref={cartRef}>
                    <button onClick={toggleCartDropdown} className="text-lg relative">
                        <FaShoppingCart className="hover:text-gray-500 text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-purple-600 rounded-full px-2 py-1">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Cart Dropdown */}
                    {showCartDropdown && cartItems.length > 0 && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
                            <h4 className="font-semibold mb-2">Cart Items</h4>
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center mb-2">
                                        <span>{item.product_title}</span>
                                        <span>${item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Wishlist Icon with Count */}
                <div className="relative" ref={wishlistRef}>
                    <button onClick={toggleWishlistDropdown} className="text-lg relative">
                        <FaHeart className="hover:text-gray-500 text-2xl" />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-yellow-500 rounded-full px-2 py-1">
                                {wishlistCount}
                            </span>
                        )}
                    </button>

                    {/* Wishlist Dropdown */}
                    {showWishlistDropdown && wishlistItems.length > 0 && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
                            <h4 className="font-semibold mb-2">Wishlist Items</h4>
                            <ul>
                                {wishlistItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center mb-2">
                                        <span>{item.product_title}</span>
                                        <span>${item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

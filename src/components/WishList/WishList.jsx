import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Fetch wishlist items from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(wishlist);
  }, []);

  if (wishlistItems.length === 0) {
    return <p className="text-center mt-10">Your wishlist is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Your Wishlist</h1>
      <ul className="space-y-4">
        {wishlistItems.map((item, index) => (
          <li key={index} className="p-4 border rounded-md shadow-md flex justify-between">
            <span>{item.product_title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
